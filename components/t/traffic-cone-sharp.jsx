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
		"content": `<style>.vwen_2kdj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10.25 3.75l.19-.736L11.2 3h1.6l.76.014l.19.736L17.65 18H6.35ZM3.75 18h16.5v3.25H3.75zm5-7.5h6.5m-7.5 4h8.5");
}
</style><path class="vwen_2kdj"/>`,
		"fallback": "iconoven:traffic-cone-sharp",
	});
}

export default Component;
