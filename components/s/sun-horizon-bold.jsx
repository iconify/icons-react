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
		"content": `<style>.esgkmdo-m {
  fill: currentColor;
  d: path("M240 148h-36.11c.07-1.33.11-2.66.11-4a76 76 0 0 0-152 0c0 1.34 0 2.67.11 4H16a12 12 0 0 0 0 24h224a12 12 0 0 0 0-24m-164-4a52 52 0 0 1 104 0c0 1.34-.07 2.67-.17 4H76.17c-.1-1.33-.17-2.66-.17-4m144 56a12 12 0 0 1-12 12H48a12 12 0 0 1 0-24h160a12 12 0 0 1 12 12M12.62 92.21a12 12 0 0 1 15.17-7.59l12 4a12 12 0 1 1-7.58 22.77l-12-4a12 12 0 0 1-7.59-15.18m56-48.41a12 12 0 1 1 22.76-7.59l4 12a12 12 0 1 1-22.76 7.59Zm140 60a12 12 0 0 1 7.59-15.18l12-4a12 12 0 0 1 7.58 22.77l-12 4a12 12 0 0 1-15.17-7.59m-48-55.59l4-12a12 12 0 1 1 22.76 7.59l-4 12a12 12 0 1 1-22.76-7.59");
}
</style><path class="esgkmdo-m"/>`,
		"fallback": "ph:sun-horizon-bold",
	});
}

export default Component;
