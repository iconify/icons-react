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
		"content": `<style>.j8q-tib6t {
  d: path("m10 6.5l5.5 3l-5.5 3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.umn_pbcqh {
  d: path("M2.5 2.5h19v14h-19Zm4.5 14v5m10-5v5");
}
</style><g class="ulnmmdpxh"><path class="umn_pbcqh"/><path class="j8q-tib6t"/></g>`,
		"fallback": "uix-sharp:jumbotron",
	});
}

export default Component;
