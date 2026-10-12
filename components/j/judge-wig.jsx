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
		"content": `<style>.c-2k5unja {
  cx: 6.75px;
  cy: 12.25px;
  r: 1.75px;
}

.e4492mmsp {
  cx: 17.25px;
  cy: 18.75px;
  r: 1.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jl82pcb2a {
  cx: 17.25px;
  cy: 12.25px;
  r: 1.75px;
}

.mup6iv_9j {
  cx: 17.25px;
  cy: 15.5px;
  r: 1.75px;
}

.ohs3i3bqs {
  cx: 6.75px;
  cy: 18.75px;
  r: 1.75px;
}

.se0yzabbi {
  d: path("M7.5 8.75q1.25 1 2.25 0t2.25 0t2.25 0t2.25 0");
}

.t9biy_bvw {
  cx: 6.75px;
  cy: 15.5px;
  r: 1.75px;
}

.tug9v5hrf {
  d: path("M6.75 11.5V9a5.25 5.25 0 0 1 10.5 0v2.5Z");
}
</style><g class="hntgybcog"><path class="tug9v5hrf"/><path class="se0yzabbi"/><circle class="c-2k5unja"/><circle class="t9biy_bvw"/><circle class="ohs3i3bqs"/><circle class="jl82pcb2a"/><circle class="mup6iv_9j"/><circle class="e4492mmsp"/></g>`,
		"fallback": "iconoven:judge-wig",
	});
}

export default Component;
