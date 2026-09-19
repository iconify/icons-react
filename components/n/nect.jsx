import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mj79n7bim {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m41.01 28.758l2.268-3.93a1.66 1.66 0 0 0 0-1.657L34.357 7.72a1.66 1.66 0 0 0-1.435-.828h-15.93a1.657 1.657 0 0 0-1.435 2.485L24 24l4.337-7.512a1.66 1.66 0 0 1 1.435-.829h6.298a1.657 1.657 0 0 1 1.435 2.486l-5.17 8.955a1.657 1.657 0 0 0 1.435 2.486h5.804a1.66 1.66 0 0 0 1.436-.828M6.99 19.242l-2.268 3.93a1.66 1.66 0 0 0 0 1.657l8.921 15.452a1.66 1.66 0 0 0 1.435.829h15.93a1.657 1.657 0 0 0 1.435-2.486L24 24l-4.337 7.512a1.66 1.66 0 0 1-1.435.829H11.93a1.657 1.657 0 0 1-1.435-2.486l5.17-8.955a1.657 1.657 0 0 0-1.435-2.486H8.425a1.66 1.66 0 0 0-1.435.828");
}
</style><path class="mj79n7bim"/>`,
		"fallback": "arcticons:nect",
	});
}

export default Component;
