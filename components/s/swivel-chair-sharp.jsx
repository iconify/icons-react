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
		"content": `<style>.aut361pmj {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 2.75h9.5v7.5h-9.5z");
}

.mxwzbwbcg {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.5 20.5h.01m5.49 0h.01m5.49 0h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.ylj6dov_e {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 10.25v3.25M5.25 10v3.5h13.5V10M12 13.5V18m-5.5 0h11");
}
</style><g class="ux2u0rbkq"><path class="aut361pmj"/><path class="ylj6dov_e"/><path class="mxwzbwbcg"/></g>`,
		"fallback": "iconoven:swivel-chair-sharp",
	});
}

export default Component;
