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
		"content": `<style>.i3iia2yek {
  fill: currentColor;
  d: path("M168 84a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0-40a8 8 0 1 1-8 8a8 8 0 0 1 8-8m36 96a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 56a16 16 0 1 1 16-16a16 16 0 0 1-16 16M54 136a42 42 0 1 0 42 42a42 42 0 0 0-42-42m0 60a18 18 0 1 1 18-18a18 18 0 0 1-18 18m134-68h-36a12 12 0 0 1-8.49-3.51L120 101l-15 15l31.52 31.51A12 12 0 0 1 140 156v48a12 12 0 0 1-24 0v-43l-36.49-36.51a12 12 0 0 1 0-17l32-32a12 12 0 0 1 17 0L157 104h31a12 12 0 0 1 0 24");
}
</style><path class="i3iia2yek"/>`,
		"fallback": "ph:person-simple-bike-bold",
	});
}

export default Component;
