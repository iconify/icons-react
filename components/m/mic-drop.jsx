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
		"content": `<style>.v4g0gobpo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15.925 3.451l.65.375a2.625 2.625 0 0 1 .961 3.586l-1.375 2.382a2.625 2.625 0 0 1-3.586.96l-.65-.375a2.625 2.625 0 0 1-.961-3.585l1.375-2.382a2.625 2.625 0 0 1 3.586-.961m-3.675 7.116za1.366 1.366 0 0 1 .431 1.973l-3.347 4.719a.824.824 0 0 1-1.084.236a.824.824 0 0 1-.337-1.056l2.412-5.259a1.366 1.366 0 0 1 1.925-.613M3 21.5h18M11.652 5.603l5.196 3");
}
</style><path class="v4g0gobpo"/>`,
		"fallback": "uix:mic-drop",
	});
}

export default Component;
