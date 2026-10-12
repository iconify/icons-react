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
		"content": `<style>.w-7yxcc2j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3.25h10v2.5H7zm0 5.5h11V21H6V8.75zM10 13h4");
}
</style><path class="w-7yxcc2j"/>`,
		"fallback": "iconoven:savings-jar-sharp",
	});
}

export default Component;
