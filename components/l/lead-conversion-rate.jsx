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
		"content": `<style>.xx8sktb4k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.027 2.5h9.946a1.75 1.75 0 0 1 1.279 2.944l-3.781 4.052A1.75 1.75 0 0 0 14 10.69v1.728a1.75 1.75 0 0 1-.967 1.566L12 14.5a1.382 1.382 0 0 1-2-1.236V10.69a1.75 1.75 0 0 0-.471-1.194L5.748 5.444A1.75 1.75 0 0 1 7.027 2.5M12 17.5c.9 1.15 1.5 1.85 1.5 2.5a1.5 1.5 0 0 1-3 0c0-.65.6-1.35 1.5-2.5");
}
</style><path class="xx8sktb4k"/>`,
		"fallback": "uix:lead-conversion-rate",
	});
}

export default Component;
