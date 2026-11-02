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
		"content": `<style>.eu--urbsm {
  fill: currentColor;
  d: path("M7.829 4h8.342A3 3 0 1 1 20 7.829v8.342A3 3 0 1 1 16.171 20H7.829A3 3 0 1 1 4 16.171V7.829A3 3 0 1 1 7.829 4M6 7.829v8.342A3.01 3.01 0 0 1 7.829 18h8.342A3.01 3.01 0 0 1 18 16.171V7.829A3 3 0 0 1 16.171 6H7.829A3 3 0 0 1 6 7.829");
}
</style><path class="eu--urbsm"/>`,
		"fallback": "coolicons:vector-square-fill-round",
	});
}

export default Component;
