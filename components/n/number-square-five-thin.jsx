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
		"content": `<style>.nfr2nhd6f {
  fill: currentColor;
  d: path("M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4ZM115.39 84l-5.87 35.21A33.26 33.26 0 0 1 124 116a32 32 0 0 1 0 64a31.62 31.62 0 0 1-22.86-9.2a4 4 0 1 1 5.72-5.6A23.67 23.67 0 0 0 124 172a24 24 0 0 0 0-48a23.67 23.67 0 0 0-17.14 6.8a4 4 0 0 1-6.81-3.46l8-48A4 4 0 0 1 112 76h40a4 4 0 0 1 0 8Z");
}
</style><path class="nfr2nhd6f"/>`,
		"fallback": "ph:number-square-five-thin",
	});
}

export default Component;
