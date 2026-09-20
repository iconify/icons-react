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
		"content": `<style>.slpdafboo {
  fill: currentColor;
  d: path("M10.32 2.116a.5.5 0 0 0-.64 0l-3 2.5a.5.5 0 1 0 .64.768L10 3.151l2.68 2.233a.5.5 0 0 0 .64-.768zm3 13.268l-3 2.5a.5.5 0 0 1-.64 0l-3-2.5a.5.5 0 1 1 .64-.768L10 16.849l2.68-2.233a.5.5 0 0 1 .64.768M10.75 8.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M10 12a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m6-2.5a1.5 1.5 0 0 1 3 0v1a1.5 1.5 0 0 1-3 0zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5m-11-1A1.5 1.5 0 0 0 5 9.5v1a1.5 1.5 0 0 0 3 0v-1A1.5 1.5 0 0 0 6.5 8M6 9.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0zm6 0a1.5 1.5 0 0 1 3 0v1a1.5 1.5 0 0 1-3 0zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5m-11-1A1.5 1.5 0 0 0 1 9.5v1a1.5 1.5 0 0 0 3 0v-1A1.5 1.5 0 0 0 2.5 8M2 9.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0z");
}
</style><path class="slpdafboo"/>`,
		"fallback": "fluent:time-picker-20-regular",
	});
}

export default Component;
