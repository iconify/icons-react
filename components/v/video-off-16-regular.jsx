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
		"content": `<style>.nq7h295uk {
  fill: currentColor;
  d: path("m10.792 11.5l3.354 3.354a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708l1.355 1.354A2.5 2.5 0 0 0 1 5.5v5A2.5 2.5 0 0 0 3.5 13h5a2.5 2.5 0 0 0 2.292-1.5m-.805-.805A1.5 1.5 0 0 1 8.5 12h-5A1.5 1.5 0 0 1 2 10.5v-5a1.5 1.5 0 0 1 1.305-1.487zM10 5.5v2.379l1 1V6.844l2.604-1.798a.25.25 0 0 1 .392.206v5.498a.25.25 0 0 1-.392.205L11.9 9.78l2.176 2.176c.508-.142.919-.6.919-1.206V5.252a1.25 1.25 0 0 0-1.96-1.028L11 5.629V5.5A2.5 2.5 0 0 0 8.5 3H5.121l1 1H8.5A1.5 1.5 0 0 1 10 5.5");
}
</style><path class="nq7h295uk"/>`,
		"fallback": "fluent:video-off-16-regular",
	});
}

export default Component;
