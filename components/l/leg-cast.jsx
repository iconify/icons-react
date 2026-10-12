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
		"content": `<style>.fxfgjucoh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.75H13q1.75 0 1.75 1.75V12q0 1.75 1.64 2.35l2.22.8q1.64.6 1.64 2.35v2q0 1.75-1.75 1.75h-10q-1.75 0-1.75-1.75v-15q0-1.75 1.75-1.75m-1.75 4h8m-8 4h8");
}
</style><path class="fxfgjucoh"/>`,
		"fallback": "iconoven:leg-cast",
	});
}

export default Component;
