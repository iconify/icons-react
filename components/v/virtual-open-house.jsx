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
		"content": `<style>.dhb-3bgbm {
  d: path("M11 13V5.5h5V13");
}

.kuah_lx3n {
  fill: currentColor;
  d: path("M11 5.5L7.5 7v6H11Z");
}

.q02j1fbyl {
  d: path("M4 3h16v12.5H4ZM2.5 19.5l1.5-4h16l1.5 4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q02j1fbyl"/><path class="dhb-3bgbm"/><path class="kuah_lx3n"/></g>`,
		"fallback": "uix-sharp:virtual-open-house",
	});
}

export default Component;
