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
		"content": `<style>.xa54b0bci {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 3L12 3L12 7L8 7ZM17 3L21 3L21 7L17 7ZM12 17L16 17L16 21L12 21ZM3 17L7 17L7 21L3 21ZM12 5L17 5M19 7L14 17M12 19L7 19M5 17L10 7");
}
</style><path class="xa54b0bci"/>`,
		"fallback": "keyline-icons:vector-skew-sharp",
	});
}

export default Component;
