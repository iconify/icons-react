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
		"content": `<style>.b4dyhhbeb {
  cx: 11.5px;
  cy: 11.5px;
  r: 9.5px;
  stroke: var(--svg-color--gray, gray);
}

.dqpmzuzoq {
  stroke: var(--svg-color--fff, #fff);
  stroke-linecap: round;
  d: path("m20 20l2 2");
}

.k2u665ban {
  fill: none;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w49j0rbvv {
  fill: currentColor;
  d: path("M0 0h24v24H0z");
}
</style><defs><mask id="SVG5qFtHdgM"><g class="k2u665ban"><circle class="b4dyhhbeb"/><path class="dqpmzuzoq"/></g></mask></defs><path mask="url(#SVG5qFtHdgM)" class="w49j0rbvv"/>`,
		"fallback": "solar:minimalistic-magnifer-line-duotone",
	});
}

export default Component;
