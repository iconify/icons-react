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
		"content": `<style>.d-0ez1byx {
  fill: currentColor;
  d: path("M1 3.75A.75.75 0 0 1 1.75 3h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 3.75m0 3A.75.75 0 0 1 1.75 6h6.418l-.625 1.5H1.75A.75.75 0 0 1 1 6.75M6.087 12c.202.567.74 1 1.415 1h.469l-.125.5H1.75a.75.75 0 0 1 0-1.5zm.831-3l-.625 1.5H1.75a.75.75 0 0 1 0-1.5zm.584 3h1.75l-.59 2.36c-.12.482.463.826.827.486l4.872-4.548A.75.75 0 0 0 13.85 9h-1.098l.781-2.342A.5.5 0 0 0 13.06 6H9.586a.5.5 0 0 0-.462.308l-2.083 5a.5.5 0 0 0 .461.692");
}
</style><path class="d-0ez1byx"/>`,
		"fallback": "fluent:text-grammar-lightning-16-filled",
	});
}

export default Component;
