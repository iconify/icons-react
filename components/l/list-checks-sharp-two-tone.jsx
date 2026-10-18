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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.l9jud4mun {
  d: path("M1.7071 6.7071L4 9L8.2929 4.7071M1.7071 16.7071L4 19L8.2929 14.7071");
}

.tjgt7cc8v {
  stroke-opacity: 0.4;
  d: path("M11 7L23 7M11 17L23 17");
}
</style><g class="gp_8x1bzb"><path class="tjgt7cc8v"/><path class="l9jud4mun"/></g>`,
		"fallback": "keyline-icons:list-checks-sharp-two-tone",
	});
}

export default Component;
