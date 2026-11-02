import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.owe4btjtz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 17H3V7h18v10h-3M6 7V3h12v4m-8 4h4m-8 4h12v6H6Z");
}
</style><path class="owe4btjtz"/>`,
		"fallback": "coolicons:printer-sharp",
	});
}

export default Component;
