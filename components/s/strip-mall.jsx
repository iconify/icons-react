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
		"content": `<style>.l7w3msboc {
  d: path("M5 21.5V16h2.5v5.5m1.75 0V16h2.5v5.5m1.75 0V16H16v5.5m1.75 0V16h2.5M5 12.5h14");
}

.lbo_3g28m {
  d: path("M2.5 6h19v3.5h-19Zm1 3.5v12h17v-12");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lbo_3g28m"/><path class="l7w3msboc"/></g>`,
		"fallback": "uix-sharp:strip-mall",
	});
}

export default Component;
