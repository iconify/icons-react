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
		"content": `<style>.g08x9hbms {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 2C12.5678 4.6962 14 8.2767 14 12C14 15.7233 12.5678 19.3038 10 22");
}
</style><path class="g08x9hbms"/>`,
		"fallback": "keyline-icons:parenthesis-right-duotone",
	});
}

export default Component;
