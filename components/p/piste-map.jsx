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
		"content": `<style>.nsaqaubsm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 5l6-2l6 2l6-2v16l-6 2l-6-2l-6 2Zm6-2v16m6-14v16");
}
</style><path class="nsaqaubsm"/>`,
		"fallback": "uix-sharp:piste-map",
	});
}

export default Component;
