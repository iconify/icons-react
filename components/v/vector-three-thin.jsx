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
		"content": `<style>.q7ob5ubfk {
  fill: currentColor;
  d: path("m234.83 138.83l-32 32a4 4 0 0 1-5.66-5.66L222.34 140H121.66l-64 64H96a4 4 0 0 1 0 8H48a4 4 0 0 1-4-4v-48a4 4 0 0 1 8 0v38.34l64-64V33.66L90.83 58.83a4 4 0 0 1-5.66-5.66l32-32a4 4 0 0 1 5.66 0l32 32a4 4 0 0 1-5.66 5.66L124 33.66V132h98.34l-25.17-25.17a4 4 0 0 1 5.66-5.66l32 32a4 4 0 0 1 0 5.66");
}
</style><path class="q7ob5ubfk"/>`,
		"fallback": "ph:vector-three-thin",
	});
}

export default Component;
