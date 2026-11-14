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
		"content": `<style>.jh--vwb6r {
  d: path("M7 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0Z");
}

.tad294bfy {
  d: path("M12 7a5 5 0 0 1 0 10Zm0-4.5v2m0 15v2M2.5 12h2m.75-6.75l1.5 1.5m-1.5 12l1.5-1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jh--vwb6r"/><path class="tad294bfy"/></g>`,
		"fallback": "uix-sharp:theme-auto",
	});
}

export default Component;
