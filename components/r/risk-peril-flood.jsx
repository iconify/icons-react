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
		"content": `<style>.h98gxob2v {
  d: path("m13.856 4.356l5.788 5.788a2.625 2.625 0 0 1 0 3.712l-5.788 5.788a2.625 2.625 0 0 1-3.712 0l-5.788-5.788a2.625 2.625 0 0 1 0-3.712l5.788-5.788a2.625 2.625 0 0 1 3.712 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sub8iw5sv {
  d: path("M7.5 11a1.5 1.5 0 0 1 3 0a1.5 1.5 0 0 1 3 0a1.5 1.5 0 0 1 3 0m-8 3.5a1.5 1.5 0 0 1 3 0a1.5 1.5 0 0 1 3 0");
}
</style><g class="hntgybcog"><path class="h98gxob2v"/><path class="sub8iw5sv"/></g>`,
		"fallback": "uix:risk-peril-flood",
	});
}

export default Component;
