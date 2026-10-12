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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lohkpacch {
  d: path("m13.83 9.15l1.02 1.02q.53.53 0 1.06l-6.57 6.56q-.53.53-1.19.89l-3.18 1.71q-.66.36-.3-.3l1.71-3.18q.36-.66.89-1.19l6.56-6.57q.53-.53 1.06 0");
}

.rbbqnyzgw {
  d: path("m12.97 4.13l6.9 6.9q.88.88 0 1.76l-.32.32q-.88.88-1.76 0l-6.9-6.9q-.88-.88 0-1.76l.32-.32q.88-.88 1.76 0");
}
</style><g class="hntgybcog"><path class="rbbqnyzgw"/><path class="lohkpacch"/></g>`,
		"fallback": "iconoven:nail",
	});
}

export default Component;
