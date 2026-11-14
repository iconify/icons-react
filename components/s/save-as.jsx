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
		"content": `<style>.abbjsrbvd {
  d: path("M8 4v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4m.25 15.875l.155-.699a1.5 1.5 0 0 1 .404-.735l3.316-3.316a1.237 1.237 0 0 1 1.75 0a1.237 1.237 0 0 1 0 1.75l-3.316 3.316a1.5 1.5 0 0 1-.735.404l-.699.155a.733.733 0 0 1-.875-.875");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lbbboouyd {
  d: path("M7.5 4h7.55a3.5 3.5 0 0 1 2.475 1.025l1.45 1.45A3.5 3.5 0 0 1 20 8.95v.925a2.375 2.375 0 0 1-2.375 2.375H15.75a3.5 3.5 0 0 0-3.5 3.5v.75a3.5 3.5 0 0 1-3.5 3.5H7.5A3.5 3.5 0 0 1 4 16.5v-9A3.5 3.5 0 0 1 7.5 4");
}
</style><g class="hntgybcog"><path class="lbbboouyd"/><path class="abbjsrbvd"/></g>`,
		"fallback": "uix:save-as",
	});
}

export default Component;
