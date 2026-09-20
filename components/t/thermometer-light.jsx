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
		"content": `<style>.anzmnzzkg {
  fill: currentColor;
  d: path("M212 58a26 26 0 1 0 26 26a26 26 0 0 0-26-26m0 40a14 14 0 1 1 14-14a14 14 0 0 1-14 14m-86 56.6V88a6 6 0 0 0-12 0v66.6a30 30 0 1 0 12 0m-6 47.4a18 18 0 1 1 18-18a18 18 0 0 1-18 18m38-67V48a38 38 0 0 0-76 0v87a62 62 0 1 0 76 0m-38 99a50 50 0 0 1-28.57-91a6 6 0 0 0 2.57-5V48a26 26 0 0 1 52 0v90a6 6 0 0 0 2.57 4.92A50 50 0 0 1 120 234");
}
</style><path class="anzmnzzkg"/>`,
		"fallback": "ph:thermometer-light",
	});
}

export default Component;
