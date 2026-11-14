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
		"content": `<style>.agxucbcxi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 4q.75 7.25 8 8q-7.25.75-8 8q-.75-7.25-8-8q7.25-.75 8-8m7-1.5q.25 2.25 2.5 2.5q-2.25.25-2.5 2.5q-.25-2.25-2.5-2.5q2.25-.25 2.5-2.5m-14 14q.25 2.25 2.5 2.5q-2.25.25-2.5 2.5q-.25-2.25-2.5-2.5q2.25-.25 2.5-2.5");
}
</style><path class="agxucbcxi"/>`,
		"fallback": "uix:sparkles-celebrate",
	});
}

export default Component;
