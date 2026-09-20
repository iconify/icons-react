import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fe_k65rsf {
  fill: currentColor;
  d: path("M15.5 9a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5A.75.75 0 0 1 15.5 9m-5 0a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5A.75.75 0 0 1 10.5 9M6.25 2.75a.75.75 0 0 0-1.5 0v14.5a.75.75 0 0 0 1.5 0z");
}
</style><path class="fe_k65rsf"/>`,
		"fallback": "fluent:text-align-justify-low-rotate-90-20-filled",
	});
}

export default Component;
