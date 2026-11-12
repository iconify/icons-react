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
		"content": `<style>.a9jwnubvp {
  d: path("M19 21.9957V18.0486C19 16.2728 17.395 14.9196 15.6265 15.2044M7.94806 13.4346L7.92328 13.4106C6.88143 12.4038 7.6864 10.785 8.5932 10.1424C9.5 9.49992 13.3451 8.49992 13.3451 13.4343C13.3451 18.1287 9.69442 22 5 22");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xvkwtxc3k {
  cx: 14.5px;
  cy: 4.5px;
  r: 2.5px;
}
</style><g class="ipq1z-bjh"><circle class="xvkwtxc3k"/><path class="a9jwnubvp"/></g>`,
		"fallback": "solar:stretching-round-linear",
	});
}

export default Component;
