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
		"content": `<style>.gz4crfbhq {
  fill: currentColor;
  d: path("M161.15 72.65A62.08 62.08 0 0 0 198 16a6 6 0 0 0-6-6h-8a62.08 62.08 0 0 0-56 35.42A62.08 62.08 0 0 0 72 10h-8a6 6 0 0 0 0 12h8a50.06 50.06 0 0 1 49.66 44.26a85.95 85.95 0 1 0 39.49 6.39M184 22h1.64A50.07 50.07 0 0 1 136 66h-1.64A50.07 50.07 0 0 1 184 22m-56 204a74 74 0 1 1 74-74a74.09 74.09 0 0 1-74 74m53.92-65A55.48 55.48 0 0 1 137 205.92a7 7 0 0 1-1 .08a6 6 0 0 1-1-11.92A43.29 43.29 0 0 0 170.08 159a6 6 0 1 1 11.84 2");
}
</style><path class="gz4crfbhq"/>`,
		"fallback": "ph:orange-light",
	});
}

export default Component;
