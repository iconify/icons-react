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
		"content": `<style>.y5eibebkr {
  fill: currentColor;
  d: path("M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4ZM128 68a60 60 0 1 0 60 60a60.07 60.07 0 0 0-60-60m0 112a52 52 0 1 1 52-52a52.06 52.06 0 0 1-52 52m68-112a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-73.17 46.83l-16 16a4 4 0 0 1-5.66-5.66l16-16a4 4 0 0 1 5.66 5.66m32 2.34a4 4 0 0 1 0 5.66l-32 32a4 4 0 0 1-5.66-5.66l32-32a4 4 0 0 1 5.66 0");
}
</style><path class="y5eibebkr"/>`,
		"fallback": "ph:washing-machine-thin",
	});
}

export default Component;
