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
		"content": `<style>.tfwsn0xuf {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-64 128a8 8 0 0 1-16 0v-32H72v32a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0v32h56V80a8 8 0 0 1 16 0Zm56 16a8 8 0 0 1-16 0v-65l-11.56 7.71a8 8 0 1 1-8.88-13.32l24-16A8 8 0 0 1 200 96Z");
}
</style><path class="tfwsn0xuf"/>`,
		"fallback": "ph:text-h-one-fill",
	});
}

export default Component;
