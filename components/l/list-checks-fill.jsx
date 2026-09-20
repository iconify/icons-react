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
		"content": `<style>.dk-sd2mhb {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-90.34 117.66l-32 32a8 8 0 0 1-11.32 0l-16-16a8 8 0 0 1 11.32-11.32L80 164.69l26.34-26.35a8 8 0 0 1 11.32 11.32m0-64l-32 32a8 8 0 0 1-11.32 0l-16-16a8 8 0 0 1 11.32-11.32L80 100.69l26.34-26.35a8 8 0 0 1 11.32 11.32M192 168h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16m0-64h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16");
}
</style><path class="dk-sd2mhb"/>`,
		"fallback": "ph:list-checks-fill",
	});
}

export default Component;
