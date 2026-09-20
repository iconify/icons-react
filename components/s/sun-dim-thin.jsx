import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dztk_pedn {
  fill: currentColor;
  d: path("M124 40v-8a4 4 0 0 1 8 0v8a4 4 0 0 1-8 0m64 88a60 60 0 1 1-60-60a60.07 60.07 0 0 1 60 60m-8 0a52 52 0 1 0-52 52a52.06 52.06 0 0 0 52-52M61.17 66.83a4 4 0 0 0 5.66-5.66l-8-8a4 4 0 0 0-5.66 5.66Zm0 122.34l-8 8a4 4 0 0 0 5.66 5.66l8-8a4 4 0 0 0-5.66-5.66m136-136l-8 8a4 4 0 0 0 5.66 5.66l8-8a4 4 0 1 0-5.66-5.66m-2.34 136a4 4 0 0 0-5.66 5.66l8 8a4 4 0 0 0 5.66-5.66ZM40 124h-8a4 4 0 0 0 0 8h8a4 4 0 0 0 0-8m88 88a4 4 0 0 0-4 4v8a4 4 0 0 0 8 0v-8a4 4 0 0 0-4-4m96-88h-8a4 4 0 0 0 0 8h8a4 4 0 0 0 0-8");
}
</style><path class="dztk_pedn"/>`,
		"fallback": "ph:sun-dim-thin",
	});
}

export default Component;
