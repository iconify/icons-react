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
		"content": `<style>.fs6wrlbbp {
  cx: 12px;
  cy: 14.75px;
  r: 6px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ja5un3p0l {
  d: path("M3 11V5.75h18V11");
}

.srx2ybb7d {
  d: path("M13.81 13.29c-.25-.62-.93-1.08-1.71-1.08c-.99 0-1.71.56-1.71 1.33c0 1.77 3.56.99 3.56 2.88c0 .81-.78 1.36-1.86 1.36c-.84 0-1.55-.46-1.86-1.08");
}
</style><g class="hntgybcog"><path class="ja5un3p0l"/><circle class="fs6wrlbbp"/><path class="srx2ybb7d"/></g>`,
		"fallback": "iconoven:spending-limit",
	});
}

export default Component;
