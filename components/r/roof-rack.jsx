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
		"content": `<style>.nfmcp_iit {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 18.25v-4l3-1l2-4h9l2 4l3 1v4h-2a2.5 2.5 0 0 0-5 0h-5a2.5 2.5 0 0 0-5 0Zm5.5-9v-3.5m8 3.5v-3.5m-10.5 0h5m3 0h5");
}
</style><path class="nfmcp_iit"/>`,
		"fallback": "uix-sharp:roof-rack",
	});
}

export default Component;
