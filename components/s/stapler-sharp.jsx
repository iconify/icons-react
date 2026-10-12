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
		"content": `<style>.kadjsqbrq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 13v-2.317L6 10.25l11.75-2.3l3.001-.613l-.001 3.063v.4l-.008 1.625l-1.592.325l-13 2.6l-2.388.488L3.75 13.4Zm-1 4.75h18.5v3.5H2.75zM5 15.25v2.5");
}
</style><path class="kadjsqbrq"/>`,
		"fallback": "iconoven:stapler-sharp",
	});
}

export default Component;
