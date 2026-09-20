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
		"content": `<style>.xmhqvybdl {
  fill: currentColor;
  d: path("M236.2 218.31A15.88 15.88 0 0 1 224 224a16.2 16.2 0 0 1-5.37-.92l-79.95-27a4 4 0 0 1-2.72-3.79V120a8 8 0 0 0-8.53-8a8.19 8.19 0 0 0-7.47 8.26v72a4 4 0 0 1-2.72 3.79l-79.95 27a16 16 0 0 1-19.26-22.92l95.97-168a16 16 0 0 1 27.89 0L237.9 200.1a15.89 15.89 0 0 1-1.7 18.21");
}
</style><path class="xmhqvybdl"/>`,
		"fallback": "ph:paper-plane-fill",
	});
}

export default Component;
