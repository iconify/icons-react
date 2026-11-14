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
		"content": `<style>.g9q6iz3ji {
  d: path("m9 9.5l3 3l3-3");
}

.njoe09d5e {
  d: path("M9 9.5V16h6V9.5");
}

.nxeu9zk9n {
  d: path("M5 21.5V4a1.5 1.5 0 0 1 1.5-1.5h11A1.5 1.5 0 0 1 19 4v17.5m-16.5 0h19M8 9.5h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nxeu9zk9n"/><path class="njoe09d5e"/><path class="g9q6iz3ji"/></g>`,
		"fallback": "uix-sharp:letterbox",
	});
}

export default Component;
