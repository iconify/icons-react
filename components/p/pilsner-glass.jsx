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
		"content": `<style>.k5hqjfb_v {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.83 1.75h6.34q1.065 0 1.74.823q.675.824.466 1.868l-2.55 12.749q-.045.228.047.442l.566 1.323q.426.992-.168 1.894q-.595.902-1.675.901h-3.192q-1.08.001-1.675-.901q-.594-.902-.168-1.895l.566-1.321q.092-.215.046-.444L6.624 4.441q-.209-1.044.466-1.868q.675-.823 1.74-.823");
}
</style><path class="k5hqjfb_v"/>`,
		"fallback": "uix-solid:pilsner-glass",
	});
}

export default Component;
