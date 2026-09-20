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
		"content": `<style>.v-7f8e-_z {
  fill: currentColor;
  d: path("M240 200a12 12 0 0 1-12 12h-40a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12m-22-82.37l-90 52.48l-89.95-52.48A12 12 0 0 0 26 138.37l96 56a12 12 0 0 0 12.1 0l96-56a12 12 0 1 0-12.1-20.74M20 80a12 12 0 0 1 6-10.37l96-56a12.06 12.06 0 0 1 12.1 0l96 56a12 12 0 0 1 0 20.74l-96 56a12 12 0 0 1-12.1 0l-96-56A12 12 0 0 1 20 80m35.82 0L128 122.11L200.18 80L128 37.89ZM138 212.3l-10 5.81l-89.95-52.48A12 12 0 0 0 26 186.37l96 56a12 12 0 0 0 12.1 0l16-9.34A12 12 0 1 0 138 212.3");
}
</style><path class="v-7f8e-_z"/>`,
		"fallback": "ph:stack-minus-bold",
	});
}

export default Component;
