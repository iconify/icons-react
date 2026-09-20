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
		"content": `<style>.h9ld9st8v {
  fill: currentColor;
  d: path("M25.993 6.254A4.5 4.5 0 0 1 28 10v12a8 8 0 0 1-8 8h-8a4.5 4.5 0 0 1-3.746-2.007Q8.377 28 8.5 28H20a6 6 0 0 0 6-6V6.5q0-.123-.007-.246M20 2a4.5 4.5 0 0 1 4.5 4.5V22a4.5 4.5 0 0 1-4.5 4.5H8.5A4.5 4.5 0 0 1 4 22V6.5A4.5 4.5 0 0 1 8.5 2zm-5.94 8.054C12.728 9.222 11 10.18 11 11.75v4.999c0 1.57 1.728 2.528 3.06 1.696l4-2.5a2 2 0 0 0 0-3.391z");
}
</style><path class="h9ld9st8v"/>`,
		"fallback": "fluent:video-short-multiple-32-filled",
	});
}

export default Component;
