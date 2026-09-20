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
		"content": `<style>.ilja8dw4x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 21v-4c-2 -1 -3 -4 -3 -7a6 6 0 0 1 12 0c0 2 -2 3 -3 3s-2 -1 -2 -2");
}
</style><path class="ilja8dw4x"/>`,
		"fallback": "iconmind:listen-outline-regular",
	});
}

export default Component;
