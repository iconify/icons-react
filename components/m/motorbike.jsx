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
		"content": `<style>.ekz86bcsq {
  cx: 18.25px;
  cy: 18px;
  r: 3px;
}

.f3zm3obpg {
  d: path("M4 10h3.75q1 0 1.5-.87v-.01q.5-.87 1.5-.87H12q1 0 1.38.92l.99 2.41q.38.92-.62.92H4q-1 0-1-1V11q0-1 1-1m10.25-4H16l1.7 9.05");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wpd6f3bzf {
  cx: 5.75px;
  cy: 18px;
  r: 3px;
}
</style><g class="hntgybcog"><circle class="wpd6f3bzf"/><circle class="ekz86bcsq"/><path class="f3zm3obpg"/></g>`,
		"fallback": "iconoven:motorbike",
	});
}

export default Component;
