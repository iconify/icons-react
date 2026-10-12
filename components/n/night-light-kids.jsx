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
		"content": `<style>.fkl-eybpb {
  width: 14.5px;
  height: 15.5px;
  x: 4.75px;
  y: 5.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 4.5px;
}

.kyfs_k2_i {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15.25 9.5h.01");
}

.mgq701b2w {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 2.75v3m5.5-3v3");
}

.pbfjczbtb {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.88 14.41a3.5 3.5 0 1 1-3.84-4.38a3 3 0 0 0 3.84 4.38");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="mgq701b2w"/><rect class="fkl-eybpb"/><path class="pbfjczbtb"/><path class="kyfs_k2_i"/></g>`,
		"fallback": "iconoven:night-light-kids",
	});
}

export default Component;
