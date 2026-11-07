import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.y_vcignoj {
  fill: currentColor;
  d: path("M11 8c0-.633.184-1.247.536-1.774a3.44 3.44 0 0 1 1.328-1.154c1.126-.563 2.463-.526 3.583.034l2 1a1 1 0 1 1-.894 1.788l-2-1a2.1 2.1 0 0 0-.951-.228C13.829 6.668 13 7.148 13 8v.382l3.447 1.724a1 1 0 1 1-.894 1.788L13 10.618V17a4.001 4.001 0 1 1-2-3.465Z");
}
</style><path class="y_vcignoj"/>`,
		"fallback": "coolicons:music-note-double-fill-round",
	});
}

export default Component;
