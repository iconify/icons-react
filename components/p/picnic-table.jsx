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
		"content": `<style>.c6eu0hbba {
  fill: currentColor;
  d: path("M248 128h-47.06l-28-56H192a8 8 0 0 0 0-16H64a8 8 0 0 0 0 16h19.06l-28 56H8a8 8 0 0 0 0 16h39.06l-22.22 44.42a8 8 0 0 0 3.58 10.73A7.9 7.9 0 0 0 32 200a8 8 0 0 0 7.17-4.42L64.94 144h126.12l25.78 51.58A8 8 0 0 0 224 200a7.9 7.9 0 0 0 3.57-.85a8 8 0 0 0 3.58-10.73L208.94 144H248a8 8 0 0 0 0-16m-175.06 0l28-56h54.12l28 56Z");
}
</style><path class="c6eu0hbba"/>`,
		"fallback": "ph:picnic-table",
	});
}

export default Component;
