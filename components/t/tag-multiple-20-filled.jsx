import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.r164pyv9c {
  fill: currentColor;
  d: path("M2.997 11.8a2 2 0 0 0 .46 2.114l2.977 2.977a4 4 0 0 0 5.642.014l4.404-4.36a2 2 0 0 0 .593-1.42v-.573l-4.997 4.953a4 4 0 0 1-.147.14l-.556.55a3 3 0 0 1-4.232-.01l-.499-.5a4 4 0 0 1-.208-.194l-2.977-2.977a2 2 0 0 1-.46-.714m6.21-9.214A2 2 0 0 1 10.62 2h4.452a2 2 0 0 1 2 2v4.374a2 2 0 0 1-.593 1.422l-5.818 5.76a2 2 0 0 1-2.821-.008l-4.384-4.384a2 2 0 0 1 0-2.828zM13.5 6.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2");
}
</style><path class="r164pyv9c"/>`,
		"fallback": "fluent:tag-multiple-20-filled",
	});
}

export default Component;
