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
		"content": `<style>.g31eslbwy {
  fill: currentColor;
  d: path("M11.02 11.727a5.5 5.5 0 1 1 .707-.707l3.127 3.126a.5.5 0 0 1-.708.708zM12 7.5a4.5 4.5 0 1 0-9 0a4.5 4.5 0 0 0 9 0");
}
</style><path class="g31eslbwy"/>`,
		"fallback": "fluent:search-16-regular",
	});
}

export default Component;
