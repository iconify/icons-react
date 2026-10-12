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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pu658ab7h {
  d: path("m3.64 18.36l5.47-5.47q.64-.64 1.28 0l.72.72q.64.64 0 1.28l-5.47 5.47q-.64.64-1.28 0l-.72-.72q-.64-.64 0-1.28m7.11-5.11l4.5-4.5");
}

.ybufkabpo {
  cx: 18.5px;
  cy: 5.5px;
  r: 2.5px;
}
</style><g class="hntgybcog"><path class="pu658ab7h"/><circle class="ybufkabpo"/></g>`,
		"fallback": "iconoven:pool-cue",
	});
}

export default Component;
