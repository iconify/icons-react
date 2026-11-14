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
		"content": `<style>.bdlp88q0m {
  d: path("M6 9.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm0 4.5h3v3H6Zm5.75-4.5h5.75m-5.75 6h3.75");
}

.oda4a2bll {
  d: path("M3 3.5h18v17H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oda4a2bll"/><path class="bdlp88q0m"/></g>`,
		"fallback": "uix-sharp:map-legend",
	});
}

export default Component;
