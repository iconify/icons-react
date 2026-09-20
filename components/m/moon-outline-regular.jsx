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
		"content": `<style>.kqnt7eczq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18 3a10 10 0 1 0 0 18 12 12 0 0 1 0 -18");
}
</style><path class="kqnt7eczq"/>`,
		"fallback": "iconmind:moon-outline-regular",
	});
}

export default Component;
