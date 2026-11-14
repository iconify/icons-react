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
		"content": `<style>.a4stnrb-k {
  d: path("M6 21.5v-14a5 5 0 0 1 5-5h4.75v1");
}

.gbg0nnujf {
  d: path("M12 7.25a3.75 3.75 0 0 1 7.5 0ZM3.5 21.5h5m3-7.5h9v7.5h-9Zm2.75 3.75h3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="a4stnrb-k"/><path class="gbg0nnujf"/></g>`,
		"fallback": "uix-sharp:lighting-controller",
	});
}

export default Component;
