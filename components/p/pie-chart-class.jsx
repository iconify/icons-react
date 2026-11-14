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
		"content": `<style>.c_a3v3r7n {
  d: path("M12 3.5a8.5 8.5 0 1 0 8.5 8.5H12Z");
}

.lfgsgcc7i {
  d: path("M15 2.75A9 9 0 0 1 21.25 9H15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c_a3v3r7n"/><path class="lfgsgcc7i"/></g>`,
		"fallback": "uix-sharp:pie-chart-class",
	});
}

export default Component;
