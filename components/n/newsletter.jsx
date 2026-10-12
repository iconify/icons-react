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
		"content": `<style>.cpqxy_tmv {
  width: 18.5px;
  height: 11px;
  x: 2.75px;
  y: 9.25px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t53_exy7z {
  d: path("M5.75 10.5V4.75a2 2 0 0 1 2-2h8.5a2 2 0 0 1 2 2v5.75M9 6.25h6M9 9h4");
}

.w-430r21p {
  d: path("m6.5 12.75l4.1 2.9c.85.6 1.95.6 2.8 0l4.1-2.9");
}
</style><g class="hntgybcog"><path class="t53_exy7z"/><rect class="cpqxy_tmv"/><path class="w-430r21p"/></g>`,
		"fallback": "iconoven:newsletter",
	});
}

export default Component;
