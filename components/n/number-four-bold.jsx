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
		"content": `<style>.kdko8s6fw {
  fill: currentColor;
  d: path("M184 156h-12V48a12 12 0 0 0-21.37-7.5l-96 120A12 12 0 0 0 64 180h84v28a12 12 0 0 0 24 0v-28h12a12 12 0 0 0 0-24m-36 0H89l59-73.79Z");
}
</style><path class="kdko8s6fw"/>`,
		"fallback": "ph:number-four-bold",
	});
}

export default Component;
