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
		"content": `<style>.cfspe_kef {
  d: path("M8.5 6h7v3h-7Zm2.25 0v3m2.5-3v3M12 12s-2.25 2.5-2.25 3.75a2.25 2.25 0 0 0 4.5 0C14.25 14.5 12 12 12 12Z");
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
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="cfspe_kef"/></g>`,
		"fallback": "uix-sharp:water-meter",
	});
}

export default Component;
