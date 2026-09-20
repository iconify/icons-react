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
		"content": `<style>.h7g_ojahb {
  fill: currentColor;
  d: path("M212 200a4 4 0 0 1-4 4H56a4 4 0 0 1 0-8h152a4 4 0 0 1 4 4m-60-44H56a4 4 0 0 0 0 8h96a60 60 0 0 0 0-120H56a4 4 0 0 0 0 8h96a52 52 0 0 1 0 104");
}
</style><path class="h7g_ojahb"/>`,
		"fallback": "ph:superset-of-thin",
	});
}

export default Component;
