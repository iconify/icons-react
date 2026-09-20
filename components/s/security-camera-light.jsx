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
		"content": `<style>.reqk2bc2l {
  fill: currentColor;
  d: path("M248 138a6 6 0 0 0-6 6v18h-46.69a2 2 0 0 1-1.41-.59l-19.76-19.75L225.9 89.9a14 14 0 0 0 0-19.8l-56-56a14 14 0 0 0-19.81 0L4.34 160.35A8 8 0 0 0 10 174h40.2l35.9 35.9a14 14 0 0 0 19.8 0l59.76-59.76l19.75 19.76a13.94 13.94 0 0 0 9.9 4.1H242v18a6 6 0 0 0 12 0v-48a6 6 0 0 0-6-6M158.59 22.59a2 2 0 0 1 2.82 0l14.1 14.1L50.2 162H19.64ZM97.41 201.41a2 2 0 0 1-2.82 0L61.17 168L184 45.17l33.41 33.42a2 2 0 0 1 0 2.82Z");
}
</style><path class="reqk2bc2l"/>`,
		"fallback": "ph:security-camera-light",
	});
}

export default Component;
