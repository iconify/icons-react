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
		"content": `<style>.hdpm07bfg {
  fill: currentColor;
  d: path("M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-56 160a8 8 0 0 1-16 0V84.94l-20.42 10.22a8 8 0 1 1-7.16-14.32l32-16A8 8 0 0 1 144 72Z");
}
</style><path class="hdpm07bfg"/>`,
		"fallback": "ph:number-one-fill",
	});
}

export default Component;
