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
		"content": `<style>.diai4l4vw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.64 7.27l7.97 9.71q.64.77-.36.77H3.75q-1 0-.36-.77l7.97-9.71q.64-.77 1.28 0m-.34 3.23l.95 7.25M6.66 13h5.97");
}
</style><path class="diai4l4vw"/>`,
		"fallback": "iconoven:pyramid",
	});
}

export default Component;
