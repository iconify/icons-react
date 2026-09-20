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
		"content": `<style>.hf6-bzrlb {
  fill: currentColor;
  d: path("M4 9.25A3.25 3.25 0 0 1 7.25 6h17.5A3.25 3.25 0 0 1 28 9.25v9.5A3.25 3.25 0 0 1 24.75 22H7.25A3.25 3.25 0 0 1 4 18.75zM3 24a1 1 0 1 0 0 2h26a1 1 0 1 0 0-2z");
}
</style><path class="hf6-bzrlb"/>`,
		"fallback": "fluent:laptop-32-filled",
	});
}

export default Component;
