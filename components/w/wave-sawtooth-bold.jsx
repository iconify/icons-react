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
		"content": `<style>.m84zq-amc {
  fill: currentColor;
  d: path("m238.29 138.22l-104 64A12 12 0 0 1 116 192V85.47l-85.71 52.75a12 12 0 0 1-12.58-20.44l104-64A12 12 0 0 1 140 64v106.53l85.71-52.75a12 12 0 1 1 12.58 20.44");
}
</style><path class="m84zq-amc"/>`,
		"fallback": "ph:wave-sawtooth-bold",
	});
}

export default Component;
