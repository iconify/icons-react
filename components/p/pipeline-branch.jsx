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
		"content": `<style>.ih7y8osvs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 20.5v-7l-6-6M7 4l5 5l5-5m3.5 3.5l-6 6v7m-12-12L8 3m8 0l5.5 5.5M8 20.5h8");
}
</style><path class="ih7y8osvs"/>`,
		"fallback": "uix:pipeline-branch",
	});
}

export default Component;
