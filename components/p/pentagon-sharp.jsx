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
		"content": `<style>.ntllq-e3u {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3.0022 10.5712L6.2741 21.0003L17.7259 21.0003L20.9978 10.5712L12 2.9997Z");
}
</style><path class="ntllq-e3u"/>`,
		"fallback": "keyline-icons:pentagon-sharp",
	});
}

export default Component;
