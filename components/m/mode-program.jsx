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
		"content": `<style>.dhh_v3bvc {
  d: path("M4.5 14a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0Zm5.75-11.5h3.5L12 4.25Zm-.5 8V18");
}

.gf6ja9xsh {
  d: path("M9.75 10.5h2.5a2.25 2.25 0 0 1 0 4.5h-2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dhh_v3bvc"/><path class="gf6ja9xsh"/></g>`,
		"fallback": "uix-sharp:mode-program",
	});
}

export default Component;
