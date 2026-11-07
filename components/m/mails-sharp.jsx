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
		"content": `<style>.sk3l1bcef {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 9h14v12H3Zm0 0l6 6h2l6-6M7 5V3h14v12");
}
</style><path class="sk3l1bcef"/>`,
		"fallback": "coolicons:mails-sharp",
	});
}

export default Component;
