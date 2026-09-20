import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.p8126mb2y {
  fill: currentColor;
  d: path("M27.318 13.153c2.241 1.236 2.24 4.458-.001 5.693L7.818 29.588C5.652 30.782 3 29.215 3 26.742V5.25c0-2.474 2.653-4.04 4.82-2.846zm-.966 3.941a1.25 1.25 0 0 0 0-2.19L6.854 4.156A1.25 1.25 0 0 0 5 5.25v21.492a1.25 1.25 0 0 0 1.853 1.095z");
}
</style><path class="p8126mb2y"/>`,
		"fallback": "fluent:triangle-right-32-regular",
	});
}

export default Component;
