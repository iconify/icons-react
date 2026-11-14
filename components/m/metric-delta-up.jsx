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
		"content": `<style>.i-c6dccrj {
  d: path("M17 12h4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uzcz9mbhg {
  fill: currentColor;
  d: path("M2.5 17h12l-6-10Z");
}
</style><g class="ulnmmdpxh"><path class="uzcz9mbhg"/><path class="i-c6dccrj"/></g>`,
		"fallback": "uix-sharp:metric-delta-up",
	});
}

export default Component;
