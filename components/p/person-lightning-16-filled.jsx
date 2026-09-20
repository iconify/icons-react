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
		"content": `<style>.kdxb6ybmb {
  fill: currentColor;
  d: path("M7.117 11.923a1.5 1.5 0 0 0 .908 2A7 7 0 0 1 7 14c-3.14 0-5-2.029-5-4v-.5A1.5 1.5 0 0 1 3.5 8h5.252zM7 1.5A2.75 2.75 0 1 1 7 7a2.75 2.75 0 0 1 0-5.5M8.502 13h1.75l-.59 2.36c-.12.482.463.826.827.486l4.872-4.548A.75.75 0 0 0 14.85 10h-1.098l.781-2.342A.5.5 0 0 0 14.06 7h-3.473a.5.5 0 0 0-.462.308l-2.083 5a.5.5 0 0 0 .461.692");
}
</style><path class="kdxb6ybmb"/>`,
		"fallback": "fluent:person-lightning-16-filled",
	});
}

export default Component;
