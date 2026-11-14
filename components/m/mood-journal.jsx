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
		"content": `<style>.riew-sbfu {
  d: path("M11.25 13c.75 1.5 4.25 1.5 5 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vd--y3b4j {
  d: path("M5 2.5h14v19H5Zm3.5 0v19m3.5-12h.01m3.49 0h.01");
}
</style><g class="ulnmmdpxh"><path class="vd--y3b4j"/><path class="riew-sbfu"/></g>`,
		"fallback": "uix-sharp:mood-journal",
	});
}

export default Component;
