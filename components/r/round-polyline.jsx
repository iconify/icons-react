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
		"content": `<style>.ffryybbcx {
  fill: currentColor;
  d: path("M10.04 6.85L7.3 10H4.5c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5h3c.14 0 .27-.02.39-.05L15 19.5v1c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-3c-.75 0-1.37.55-1.48 1.27L9 14.26V11.5c0-.12-.01-.24-.04-.36L11.7 8h2.8c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-3c-.83 0-1.5.67-1.5 1.5v3c0 .12.01.24.04.35");
}
</style><path class="ffryybbcx"/>`,
		"fallback": "ic:round-polyline",
	});
}

export default Component;
