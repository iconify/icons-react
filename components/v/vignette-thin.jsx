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
		"content": `<style>.rm37r6bfm {
  fill: currentColor;
  d: path("M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 156a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4ZM128 76c-37.5 0-68 23.33-68 52s30.5 52 68 52s68-23.33 68-52s-30.5-52-68-52m0 96c-33.08 0-60-19.74-60-44s26.92-44 60-44s60 19.74 60 44s-26.92 44-60 44");
}
</style><path class="rm37r6bfm"/>`,
		"fallback": "ph:vignette-thin",
	});
}

export default Component;
