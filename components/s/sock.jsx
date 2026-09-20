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
		"content": `<style>.ckuqilb7r {
  fill: currentColor;
  d: path("M192 16h-88a16 16 0 0 0-16 16v76.69l-38.75 38.74a58.92 58.92 0 0 0 83.32 83.32L201 162.34a23.85 23.85 0 0 0 7-17V32a16 16 0 0 0-16-16m0 16v16h-88V32Zm-70.75 187.43a42.91 42.91 0 1 1-60.68-60.68l41.09-41.09A8 8 0 0 0 104 112V64h88v40.58A56.09 56.09 0 0 0 144 160a55.4 55.4 0 0 0 7.93 28.76ZM189.66 151l-25.91 25.91A39.6 39.6 0 0 1 160 160a40.05 40.05 0 0 1 32-39.19v24.56a8 8 0 0 1-2.34 5.63");
}
</style><path class="ckuqilb7r"/>`,
		"fallback": "ph:sock",
	});
}

export default Component;
