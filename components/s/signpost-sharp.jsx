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
		"content": `<style>.xjr93abvn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 4H17.5l.71.71l1.33 1.33l.71.71l-.71.71l-1.33 1.33l-.71.71H5.25V4zm1.25 8h11.25v5.5H6.5l-.71-.71l-1.33-1.33l-.71-.71l.71-.71l1.33-1.33l.71-.71zM12 9.5V12m0 5.5v3.75");
}
</style><path class="xjr93abvn"/>`,
		"fallback": "iconoven:signpost-sharp",
	});
}

export default Component;
