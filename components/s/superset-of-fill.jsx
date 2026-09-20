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
		"content": `<style>.p4v675b8q {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-32 152H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16m-32-32H80a8 8 0 0 1 0-16h64a24 24 0 0 0 0-48H80a8 8 0 0 1 0-16h64a40 40 0 0 1 0 80");
}
</style><path class="p4v675b8q"/>`,
		"fallback": "ph:superset-of-fill",
	});
}

export default Component;
