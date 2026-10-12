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
		"content": `<style>.i3kfef7xf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.25 12.95l3.25 7.25q.25.55-.35.55h-6.3q-.6 0-.35-.55l3.25-7.25q.25-.55.5 0m-9 2.55l17.5-6.25M5.5 14.7v-3.5m13-1.15v-3.5");
}
</style><path class="i3kfef7xf"/>`,
		"fallback": "iconoven:playground",
	});
}

export default Component;
