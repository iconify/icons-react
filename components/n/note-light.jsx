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
		"content": `<style>.fpp9u0-rs {
  fill: currentColor;
  d: path("M90 96a6 6 0 0 1 6-6h64a6 6 0 0 1 0 12H96a6 6 0 0 1-6-6m6 38h64a6 6 0 0 0 0-12H96a6 6 0 0 0 0 12m32 20H96a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m94-106v108.69a13.94 13.94 0 0 1-4.1 9.9l-51.31 51.31a13.94 13.94 0 0 1-9.9 4.1H48a14 14 0 0 1-14-14V48a14 14 0 0 1 14-14h160a14 14 0 0 1 14 14M48 210h106v-50a6 6 0 0 1 6-6h50V48a2 2 0 0 0-2-2H48a2 2 0 0 0-2 2v160a2 2 0 0 0 2 2m153.52-44H166v35.52Z");
}
</style><path class="fpp9u0-rs"/>`,
		"fallback": "ph:note-light",
	});
}

export default Component;
