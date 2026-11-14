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
		"content": `<style>.gyv3-vb5h {
  d: path("M2.5 6A3.75 2 0 1 0 10 6a3.75 2 0 1 0-7.5 0Z");
}

.tkqa5yb1g {
  d: path("M13 14.5q2-1.5 4.25 0t4.25 0m-11.5 2h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v7sd5nbsv {
  d: path("M2.5 6v12.5a3.75 2 0 0 0 7.5 0V6m3 5.5v7a2 2 0 0 0 2 2h4.5a2 2 0 0 0 2-2v-7");
}
</style><g class="ulnmmdpxh"><path class="gyv3-vb5h"/><path class="v7sd5nbsv"/><path class="tkqa5yb1g"/></g>`,
		"fallback": "uix-sharp:sewage-treatment-plant",
	});
}

export default Component;
