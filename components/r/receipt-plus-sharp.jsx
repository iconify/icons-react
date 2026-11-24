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
		"content": `<style>.fd62ncckn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 3h8v18l-4-2l-4 2l-4-2l-4 2V3zm-3 8h6m-3-3v6");
}
</style><path class="fd62ncckn"/>`,
		"fallback": "coolicons:receipt-plus-sharp",
	});
}

export default Component;
