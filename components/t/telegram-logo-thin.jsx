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
		"content": `<style>.kwiv0wp9o {
  fill: currentColor;
  d: path("M226.27 29.22a5 5 0 0 0-5.1-.87L18.51 107.66a10.22 10.22 0 0 0 1.75 19.56L76 138.16V200a12 12 0 0 0 7.51 11.13A12.1 12.1 0 0 0 88 212a12 12 0 0 0 8.62-3.68l28-29l43 37.71a12 12 0 0 0 7.89 3a12.5 12.5 0 0 0 3.74-.59a11.87 11.87 0 0 0 8-8.72l40.62-176.6a5 5 0 0 0-1.6-4.9M20 117.38a2.13 2.13 0 0 1 1.42-2.27l174.65-68.35l-117 83.85l-57.26-11.24a2.12 2.12 0 0 1-1.81-1.99m70.87 85.38A4 4 0 0 1 84 200v-56.3l34.58 30.3Zm88.58 6.14a4 4 0 0 1-6.57 2.09l-86.45-75.81l131.7-94.38Z");
}
</style><path class="kwiv0wp9o"/>`,
		"fallback": "ph:telegram-logo-thin",
	});
}

export default Component;
