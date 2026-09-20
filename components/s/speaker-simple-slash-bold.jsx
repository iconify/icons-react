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
		"content": `<style>.aryabdqof {
  fill: currentColor;
  d: path("M248 88v80a12 12 0 0 1-24 0V88a12 12 0 0 1 24 0m-23.12 119.93a12 12 0 1 1-17.76 16.14L172 185.44V224a12 12 0 0 1-19.37 9.47L83.88 180H40a20 20 0 0 1-20-20V96a20 20 0 0 1 20-20h32.51L47.12 48.07a12 12 0 0 1 17.76-16.14ZM148 159l-53.67-59H44v56h44a12 12 0 0 1 7.37 2.53L148 199.46Zm-14.15-91.5l14.15-11v38.4a12 12 0 0 0 24 0V32a12 12 0 0 0-19.37-9.47L119.12 48.6a12 12 0 1 0 14.73 18.94ZM200 150.94a12 12 0 0 0 12-12V104a12 12 0 0 0-24 0v34.94a12 12 0 0 0 12 12");
}
</style><path class="aryabdqof"/>`,
		"fallback": "ph:speaker-simple-slash-bold",
	});
}

export default Component;
