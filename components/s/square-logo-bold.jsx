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
		"content": `<style>.u4cplnbmu {
  fill: currentColor;
  d: path("M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM96 172h64a12 12 0 0 0 12-12V96a12 12 0 0 0-12-12H96a12 12 0 0 0-12 12v64a12 12 0 0 0 12 12m12-64h40v40h-40Z");
}
</style><path class="u4cplnbmu"/>`,
		"fallback": "ph:square-logo-bold",
	});
}

export default Component;
