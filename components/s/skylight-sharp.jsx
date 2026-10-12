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
		"content": `<style>.td5nj83qq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 14L8 11.375m9-4.5l4.25-2.125M8.67 9.29l7.66-3.83l.67-.33v3.5l-.67.33l-7.66 3.83l-.67.34v-3.5zm3.83-1.915v3.5m-3 4.625v4m3.5-5.75v4M16.5 12v4");
}
</style><path class="td5nj83qq"/>`,
		"fallback": "iconoven:skylight-sharp",
	});
}

export default Component;
