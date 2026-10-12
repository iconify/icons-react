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
		"content": `<style>.o6y4byb0b {
  cx: 7px;
  cy: 15px;
  r: 4.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q_nfnc6mi {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 15h.01");
}

.qbqaq4n_g {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.25 15h10M19 15v3m-2.75-3v2.25M14 5.75h7.25v5.75H14zm1.75 0V3h3.5v2.75");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><circle class="o6y4byb0b"/><path class="q_nfnc6mi"/><path class="qbqaq4n_g"/></g>`,
		"fallback": "iconoven:private-key-sharp",
	});
}

export default Component;
