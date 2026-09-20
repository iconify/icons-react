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
		"content": `<style>.blynuqbjt {
  fill: currentColor;
  d: path("M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4ZM136 80v96a4 4 0 0 1-8 0V87.47l-17.78 11.86a4 4 0 1 1-4.44-6.66l24-16A4 4 0 0 1 136 80");
}
</style><path class="blynuqbjt"/>`,
		"fallback": "ph:number-square-one-thin",
	});
}

export default Component;
