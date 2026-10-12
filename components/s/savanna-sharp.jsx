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
		"content": `<style>.iq4yxgbzb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 8.25c0-1.75 3.25-3 7.25-3s7.25 1.25 7.25 3V10H4.75zM12 10v8.25M12 14l-3-4m3 3l2.25-3m-11.5 8.25h18.5m-14.75 3h11");
}
</style><path class="iq4yxgbzb"/>`,
		"fallback": "iconoven:savanna-sharp",
	});
}

export default Component;
