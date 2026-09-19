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
		"content": `<style>.soc7yt8cl {
  fill: currentColor;
  d: path("M20 7v1h3v1h-4V6h3V5h-3V4h4v3zM5.88 20h2.66l3.4-5.42h.12l3.4 5.42h2.66l-4.65-7.27L17.81 6h-2.68l-3.07 4.99h-.12L8.85 6H6.19l4.32 6.73z");
}
</style><path class="soc7yt8cl"/>`,
		"fallback": "ic:sharp-superscript",
	});
}

export default Component;
