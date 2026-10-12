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
		"content": `<style>.db_lt25qf {
  d: path("M7.25 4H21v17H3V4zM3 10.75h5m8 0h5");
}

.jfv_jd2bm {
  d: path("M10.25 8.75h3.5v4.5h-3.5z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="db_lt25qf"/><path class="jfv_jd2bm"/></g>`,
		"fallback": "iconoven:treasure-chest-lock-sharp",
	});
}

export default Component;
