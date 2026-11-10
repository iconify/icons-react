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
		"content": `<style>.kdmwdqiki {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18 22H23M18 22V8M18 22H14H10H6M18 8H6M18 8H20.972L12 2L3 8H6M6 22H1M6 22V8M10 18H14V14C14 12.9 13.105 12 12 12C10.895 12 10 12.9 10 14V18Z");
}
</style><path class="kdmwdqiki"/>`,
		"fallback": "keyline-icons:tower-sharp",
	});
}

export default Component;
