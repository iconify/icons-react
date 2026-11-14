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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xsv8hdbpm {
  d: path("M10.052 17.638a6 6 0 1 1 3.341-3.008");
}

.ze0cfd9xh {
  d: path("M13.948 6.362a6 6 0 1 1-3.341 3.008");
}
</style><g class="ulnmmdpxh"><path class="xsv8hdbpm"/><path class="ze0cfd9xh"/></g>`,
		"fallback": "uix-sharp:link-connected",
	});
}

export default Component;
