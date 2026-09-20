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
		"content": `<style>.il0pcw8no {
  fill: currentColor;
  d: path("M236 172a40 40 0 0 1-80 0V76h-56v124a12 12 0 0 1-24 0V76h-4a36 36 0 0 0-36 36a12 12 0 0 1-24 0a60.07 60.07 0 0 1 60-60h152a12 12 0 0 1 0 24h-44v96a16 16 0 0 0 32 0a12 12 0 0 1 24 0");
}
</style><path class="il0pcw8no"/>`,
		"fallback": "ph:pi-bold",
	});
}

export default Component;
