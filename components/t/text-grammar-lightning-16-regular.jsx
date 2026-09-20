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
		"content": `<style>.ph5c2sghd {
  fill: currentColor;
  d: path("M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h6.668l-.416 1H1.5a.5.5 0 0 1-.5-.5M6.502 10H1.5a.5.5 0 0 1 0-1h5.418zm-.415 2c.202.567.74 1 1.415 1H1.5a.5.5 0 0 1 0-1zm1.415 0h1.75l-.59 2.36c-.12.482.463.826.827.486l4.872-4.548A.75.75 0 0 0 13.85 9h-1.098l.781-2.342A.5.5 0 0 0 13.06 6H9.586a.5.5 0 0 0-.462.308l-2.083 5a.5.5 0 0 0 .461.692");
}
</style><path class="ph5c2sghd"/>`,
		"fallback": "fluent:text-grammar-lightning-16-regular",
	});
}

export default Component;
