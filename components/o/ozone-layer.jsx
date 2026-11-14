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
		"content": `<style>.gn_axib7x {
  d: path("M13.5 11.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.mnq2fcawn {
  d: path("M2.5 4q9.5-2 19 0m-19 13.75q9.5-2 19 0m-19 3.75q9.5-2 19 0m-16-10a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w9pu6tdzb {
  d: path("M9.5 8.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}
</style><g class="ulnmmdpxh"><path class="mnq2fcawn"/><path class="w9pu6tdzb"/><path class="gn_axib7x"/></g>`,
		"fallback": "uix-sharp:ozone-layer",
	});
}

export default Component;
