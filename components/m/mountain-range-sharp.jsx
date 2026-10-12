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
		"content": `<style>.tk580u8vi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.15 19.33l3.45-7.91l.4-.92l.54.84l1.52 2.42l.54.84l.34-.94l2.97-8.22l.34-.94l.42.91l2.91 6.18l.42.91l.87-.5h.01l.87-.5l.27.96l1.96 6.83l.27.96H2.75zM9.6 14.6l3.6 5.65");
}
</style><path class="tk580u8vi"/>`,
		"fallback": "iconoven:mountain-range-sharp",
	});
}

export default Component;
