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
		"content": `<style>.dy4cmmk2o {
  d: path("M5.5 12a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zkq59-bzt {
  d: path("M5.5 11.25a10 3.5-20 1 0 11-4");
}
</style><g class="ulnmmdpxh"><path class="dy4cmmk2o"/><path class="zkq59-bzt"/></g>`,
		"fallback": "uix-sharp:planet",
	});
}

export default Component;
