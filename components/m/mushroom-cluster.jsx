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
		"content": `<style>.pw_e03kfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 9a4.5 4.5 0 0 1 9 0ZM12 9v12m-9.5-6a3 3 0 0 1 6 0Zm3 0v6m10-8a3 3 0 0 1 6 0Zm3 0v8m-16 0h19");
}
</style><path class="pw_e03kfd"/>`,
		"fallback": "uix-sharp:mushroom-cluster",
	});
}

export default Component;
