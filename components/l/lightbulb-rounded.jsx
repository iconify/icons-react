import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lzk8cfiap {
  fill: currentColor;
  d: path("M10.799 20.691q-.51-.462-.607-1.152h3.616q-.096.69-.607 1.152T12 21.154t-1.201-.463M9 17.77q-.213 0-.357-.143T8.5 17.27t.143-.356T9 16.77h6q.214 0 .357.144t.143.356t-.143.357t-.357.143zM8.558 15q-1.417-.929-2.238-2.356T5.5 9.5q0-2.721 1.89-4.61T12 3t4.61 1.89T18.5 9.5q0 1.717-.82 3.144T15.442 15z");
}
</style><path class="lzk8cfiap"/>`,
		"fallback": "material-symbols-light:lightbulb-rounded",
	});
}

export default Component;
