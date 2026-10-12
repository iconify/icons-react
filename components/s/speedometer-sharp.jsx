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
		"content": `<style>.t6z63nbnk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 15a9.25 9.25 0 0 1 18.5 0v3.25H2.75v-1ZM6 15h1.5M12 8.5V10m4.5 5H18m-6 0l3.75-3.75");
}
</style><path class="t6z63nbnk"/>`,
		"fallback": "iconoven:speedometer-sharp",
	});
}

export default Component;
