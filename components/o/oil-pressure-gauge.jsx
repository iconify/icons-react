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
		"content": `<style>.dc40ndbzi {
  d: path("M12 11c1.75 2 2.25 3 2.25 4a2.25 2.25 0 0 1-4.5 0c0-1 .5-2 2.25-4Zm0 0l4.25-4.25M2.5 12H5m7-9.5V5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdgu3ybil {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Z");
}
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="dc40ndbzi"/></g>`,
		"fallback": "uix-sharp:oil-pressure-gauge",
	});
}

export default Component;
