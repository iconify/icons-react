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
		"content": `<style>.hzqk7fm3x {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L21 3L21 21L3 21ZM7 10L7 9L7 7L17 7L17 9L17 10M12 7L12 17M8.5 17L9.5 17L14.5 17L15.5 17");
}
</style><path class="hzqk7fm3x"/>`,
		"fallback": "keyline-icons:square-type-sharp",
	});
}

export default Component;
