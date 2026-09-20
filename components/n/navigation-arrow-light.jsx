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
		"content": `<style>.sy-o92b3n {
  fill: currentColor;
  d: path("M236.65 108.1L60.72 42.83h-.13a14 14 0 0 0-17.81 17.76s0 .09 0 .13l65.32 175.93a13.77 13.77 0 0 0 13.18 9.35h.26a13.8 13.8 0 0 0 13.14-9.88v-.15l22.14-79.1L236 134.73h.15a14 14 0 0 0 .53-26.58Zm-4 15.1l-82.26 23a6 6 0 0 0-4.16 4.16l-23 82.26a1.85 1.85 0 0 1-1.86 1.36a1.82 1.82 0 0 1-1.92-1.35a.6.6 0 0 0 0-.12L54.11 56.62a2 2 0 0 1 2.51-2.51l175.91 65.26h.12a2 2 0 0 1 0 3.79Z");
}
</style><path class="sy-o92b3n"/>`,
		"fallback": "ph:navigation-arrow-light",
	});
}

export default Component;
