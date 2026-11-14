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
		"content": `<style>.dg2ma0_7p {
  d: path("M2.5 9h19v11.5h-19Zm13 0L20 3");
}

.ols36dwys {
  d: path("M5.25 14.75a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM13.5 13h5m-5 3.5h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dg2ma0_7p"/><path class="ols36dwys"/></g>`,
		"fallback": "uix-sharp:radio-antenna-telescopic",
	});
}

export default Component;
