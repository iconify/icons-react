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
		"content": `<style>.ixcji1bpf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v2l6 2L6 10l12 3.5L6 17l6 2v2.5m-3-19h6m-6 19h6");
}
</style><path class="ixcji1bpf"/>`,
		"fallback": "uix-sharp:spring",
	});
}

export default Component;
