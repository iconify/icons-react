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
		"content": `<style>.fik58ib6w {
  fill: currentColor;
  d: path("M16.48 2.52c3.27 1.55 5.61 4.72 5.97 8.48h1.5C23.44 4.84 18.29 0 12 0l-.66.03l3.81 3.81zM7.52 21.48A10.49 10.49 0 0 1 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03l-3.81-3.81zM9.17.69L.69 9.17l14.14 14.14l8.48-8.48zm5.66 20.5L2.81 9.17l6.36-6.36l12.02 12.02z");
}
</style><path class="fik58ib6w"/>`,
		"fallback": "ic:sharp-screen-rotation",
	});
}

export default Component;
