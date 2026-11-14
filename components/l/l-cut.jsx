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
		"content": `<style>.f9l6tabby {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5.5h12V11h-12Zm0 8.25h19v5.5h-19Zm6-8.25V11");
}
</style><path class="f9l6tabby"/>`,
		"fallback": "uix-sharp:l-cut",
	});
}

export default Component;
