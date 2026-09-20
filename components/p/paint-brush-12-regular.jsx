import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hv1r2tq-l {
  fill: currentColor;
  d: path("M8.5 1h-6a.5.5 0 0 0-.5.5V7c0 .552.449 1 1 1h1v1.5c0 .827.673 1.5 1.5 1.5S7 10.327 7 9.5V8h1c.551 0 1-.448 1-1V1.5a.5.5 0 0 0-.5-.5M4 2v.5a.5.5 0 0 0 1 0V2h1v1a.5.5 0 0 0 1 0V2h1v3H3V2zm2.5 5a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 0-.5-.5H3V6h5v1z");
}
</style><path class="hv1r2tq-l"/>`,
		"fallback": "fluent:paint-brush-12-regular",
	});
}

export default Component;
