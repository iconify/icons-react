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
		"content": `<style>.u_xr9egzp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75v5.5m-2.5-5.5h5M9 8.25h6a1 1 0 0 1 1 1v1.5a1 1 0 0 1-.25.65l-3 9.1a.8.8 0 0 1-1.5 0l-3-9.1a1 1 0 0 1-.25-.65v-1.5a1 1 0 0 1 1-1m-1 3h8");
}
</style><path class="u_xr9egzp"/>`,
		"fallback": "iconoven:plumb-bob",
	});
}

export default Component;
