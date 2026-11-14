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
		"content": `<style>.xzigytb2o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m19.425 3.868l.707.707a1.5 1.5 0 0 1 0 2.122l-8.557 8.557a1.5 1.5 0 0 1-.666.386l-1.561.426a1.152 1.152 0 0 1-1.414-1.414l.426-1.561a1.5 1.5 0 0 1 .386-.666l8.557-8.557a1.5 1.5 0 0 1 2.122 0M8.464 12.707l2.829 2.829M14.75 18l2 2L21 15.75");
}
</style><path class="xzigytb2o"/>`,
		"fallback": "uix:treasury-approval-workflow",
	});
}

export default Component;
