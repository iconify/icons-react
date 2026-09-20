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
		"content": `<style>.xj_zd54wc {
  fill: currentColor;
  d: path("M235.76 138.83A16 16 0 0 1 224 144h-88v56a16 16 0 0 0 32 0a8 8 0 0 1 16 0a32 32 0 0 1-64 0v-56H32a16 16 0 0 1-16-17.37a112.44 112.44 0 0 1 188.2-72.88a111.56 111.56 0 0 1 35.8 72.88a16.1 16.1 0 0 1-4.24 12.2");
}
</style><path class="xj_zd54wc"/>`,
		"fallback": "ph:umbrella-simple-fill",
	});
}

export default Component;
