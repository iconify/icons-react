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
		"content": `<style>.rk6vfs05v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 18.5a3 2 0 1 0 6 0a3 2 0 1 0-6 0ZM2.5 14h19M12 16.5v-8m0 2c-3 0-5.25-2-5.25-4.75c3 0 5.25 2 5.25 4.75Zm0-2c0-2.75 2.25-4.75 5.25-4.75C17.25 6.5 15 8.5 12 8.5Z");
}
</style><path class="rk6vfs05v"/>`,
		"fallback": "uix-sharp:seed-germination",
	});
}

export default Component;
