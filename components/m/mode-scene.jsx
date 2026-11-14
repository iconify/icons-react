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
		"content": `<style>.cqgr-g2_j {
  d: path("m2.5 16l6-6l5.5 5.5l2.5-2.5l5 4.5m-7.25-9a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.hneliqdkn {
  d: path("M2.5 4h19v16h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hneliqdkn"/><path class="cqgr-g2_j"/></g>`,
		"fallback": "uix-sharp:mode-scene",
	});
}

export default Component;
