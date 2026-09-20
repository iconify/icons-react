import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b5h6uf3iw {
  fill: currentColor;
  d: path("M10.505 3.117a1 1 0 0 0-1.011 0l-6.01 3.52a1 1 0 0 0 .003 1.726l6.009 3.502a1 1 0 0 0 1.007 0l6.009-3.502a1 1 0 0 0 .001-1.727zM9.494 4.276a1 1 0 0 1 1.01 0l5.504 3.223l-5.505 3.209a1 1 0 0 1-1.007 0L3.99 7.499zM3.07 9.65l6.438 3.623a1 1 0 0 0 .98 0l6.438-3.623a1 1 0 0 1-.415 1.26l-6.01 3.502a1 1 0 0 1-1.006 0l-6.01-3.502a1 1 0 0 1-.415-1.26m0 2.453l6.438 3.622a1 1 0 0 0 .98 0l6.438-3.622a1 1 0 0 1-.415 1.26l-6.01 3.502a1 1 0 0 1-1.006 0l-6.01-3.502a1 1 0 0 1-.415-1.26");
}
</style><path class="b5h6uf3iw"/>`,
		"fallback": "fluent:layer-20-regular",
	});
}

export default Component;
