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
		"content": `<style>.i_h94zbyz {
  fill: currentColor;
  d: path("M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4ZM155.28 85.71a4 4 0 0 1 .48 3.66l-32 88A4 4 0 0 1 120 180a4.1 4.1 0 0 1-1.37-.24a4 4 0 0 1-2.39-5.13L146.29 92H104a4 4 0 0 1 0-8h48a4 4 0 0 1 3.28 1.71");
}
</style><path class="i_h94zbyz"/>`,
		"fallback": "ph:number-square-seven-thin",
	});
}

export default Component;
