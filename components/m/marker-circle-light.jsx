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
		"content": `<style>.by7-6yc6h {
  fill: currentColor;
  d: path("M200.12 55.87A102 102 0 1 0 55.88 200.12A102 102 0 1 0 200.12 55.87M86 207.64V176a2 2 0 0 1 2-2h80a2 2 0 0 1 2 2v31.64a90.32 90.32 0 0 1-84 0M104 142h48a2 2 0 0 1 2 2v18h-52v-18a2 2 0 0 1 2-2m11.54-12L126 79.59a2 2 0 0 1 3.92 0L140.46 130Zm76.1 61.64A93 93 0 0 1 182 200v-24a14 14 0 0 0-14-14h-2v-18a14 14 0 0 0-13.27-14l-11-52.9a14 14 0 0 0-27.42 0l-11 52.9A14 14 0 0 0 90 144v18h-2a14 14 0 0 0-14 14v24a93 93 0 0 1-9.64-8.37a90 90 0 1 1 127.28 0Z");
}
</style><path class="by7-6yc6h"/>`,
		"fallback": "ph:marker-circle-light",
	});
}

export default Component;
