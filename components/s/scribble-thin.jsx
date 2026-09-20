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
		"content": `<style>.a2g3fqfur {
  fill: currentColor;
  d: path("M202.84 186.83a18.61 18.61 0 0 0 0 26.34a4 4 0 0 1-5.66 5.66a26.63 26.63 0 0 1 0-37.66l9.38-9.37a18.63 18.63 0 1 0-26.35-26.34l-66.76 66.74a26.63 26.63 0 0 1-37.66-37.66l98.76-98.74a18.63 18.63 0 1 0-26.35-26.34L81.45 116.2a26.63 26.63 0 0 1-37.66-37.66l41.38-41.37a4 4 0 1 1 5.65 5.66L49.44 84.2a18.63 18.63 0 1 0 26.35 26.34l66.76-66.74a26.63 26.63 0 0 1 37.66 37.66L81.45 180.2a18.63 18.63 0 1 0 26.35 26.34l66.75-66.74a26.63 26.63 0 0 1 37.66 37.66Z");
}
</style><path class="a2g3fqfur"/>`,
		"fallback": "ph:scribble-thin",
	});
}

export default Component;
