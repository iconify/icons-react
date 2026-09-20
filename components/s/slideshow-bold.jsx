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
		"content": `<style>.zs978yrci {
  fill: currentColor;
  d: path("M184 44H72a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h112a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-4 144H76V68h104Zm64-132v144a12 12 0 0 1-24 0V56a12 12 0 0 1 24 0M36 56v144a12 12 0 0 1-24 0V56a12 12 0 0 1 24 0");
}
</style><path class="zs978yrci"/>`,
		"fallback": "ph:slideshow-bold",
	});
}

export default Component;
