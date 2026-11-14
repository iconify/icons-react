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
		"content": `<style>.qfg02qyew {
  d: path("M12 5.25c2 1.5 2 4.25 2 6.25v4h-4v-4c0-2 0-4.75 2-6.25Zm0 10.25v3m-2-6.75l-2.25 3v.75H10m4-3.75l2.25 3v.75H14");
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
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="qfg02qyew"/></g>`,
		"fallback": "uix-sharp:rocket-badge",
	});
}

export default Component;
