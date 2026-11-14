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
		"content": `<style>.d3xoxjbca {
  d: path("M11.976 18.109L10.25 19L2.5 15V6.5l7.75-4l7.75 4v7.579");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xubokp_tp {
  d: path("m2.5 6.5l7.75 4l7.75-4m-7.75 4V19m4.25.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm3-1.25l3.75-3.75m-1.5 1.5l1.5 1.5");
}
</style><g class="ulnmmdpxh"><path class="d3xoxjbca"/><path class="xubokp_tp"/></g>`,
		"fallback": "uix-sharp:package-token",
	});
}

export default Component;
