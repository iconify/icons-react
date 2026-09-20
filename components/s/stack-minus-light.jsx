import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ry3cxmv2l {
  fill: currentColor;
  d: path("M238 200a6 6 0 0 1-6 6h-48a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6m-17-77.18l-93 54.23l-93-54.23a6 6 0 0 0-6 10.36l96 56a6 6 0 0 0 6 0l96-56a6 6 0 0 0-6-10.36M26 80a6 6 0 0 1 3-5.18l96-56a6 6 0 0 1 6 0l96 56a6 6 0 0 1 0 10.36l-96 56a6 6 0 0 1-6 0l-96-56A6 6 0 0 1 26 80m17.91 0L128 129.05L212.09 80L128 31ZM141 217.48l-13 7.57l-93-54.23a6 6 0 0 0-6 10.36l96 56a6 6 0 0 0 6 0l16-9.33a6 6 0 0 0-6-10.37");
}
</style><path class="ry3cxmv2l"/>`,
		"fallback": "ph:stack-minus-light",
	});
}

export default Component;
