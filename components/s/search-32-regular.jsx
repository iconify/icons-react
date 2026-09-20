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
		"content": `<style>.f9539ibzy {
  fill: currentColor;
  d: path("M21.894 23.308A11.45 11.45 0 0 1 14.5 26C8.149 26 3 20.851 3 14.5S8.149 3 14.5 3S26 8.149 26 14.5a11.45 11.45 0 0 1-2.692 7.394l6.4 6.399a1 1 0 0 1-1.415 1.414zM24 14.5a9.5 9.5 0 1 0-19 0a9.5 9.5 0 0 0 19 0");
}
</style><path class="f9539ibzy"/>`,
		"fallback": "fluent:search-32-regular",
	});
}

export default Component;
