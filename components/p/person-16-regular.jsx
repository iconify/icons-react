import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d9f90eb1u {
  fill: currentColor;
  d: path("M11.5 8A1.5 1.5 0 0 1 13 9.5v.5c0 1.971-1.86 4-5 4s-5-2.029-5-4v-.5A1.5 1.5 0 0 1 4.5 8zm0 1h-7a.5.5 0 0 0-.5.5v.5c0 1.438 1.432 3 4 3s4-1.562 4-3v-.5a.5.5 0 0 0-.5-.5M8 1.5A2.75 2.75 0 1 1 8 7a2.75 2.75 0 0 1 0-5.5m0 1A1.75 1.75 0 1 0 8 6a1.75 1.75 0 0 0 0-3.5");
}
</style><path class="d9f90eb1u"/>`,
		"fallback": "fluent:person-16-regular",
	});
}

export default Component;
