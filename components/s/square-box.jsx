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
		"content": `<style>.qe240st5r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm13.5 7v2.467a.5.5 0 0 1-.279.448l-4 1.976a.5.5 0 0 1-.442 0l-4-1.976a.5.5 0 0 1-.279-.448V9.533a.5.5 0 0 1 .279-.448l4-1.976a.5.5 0 0 1 .442 0l4 1.976a.5.5 0 0 1 .279.448zM7.58 9.262L12 11.444l4.42-2.182M12 11.444v5.498");
}
</style><path class="qe240st5r"/>`,
		"fallback": "coolicons:square-box",
	});
}

export default Component;
