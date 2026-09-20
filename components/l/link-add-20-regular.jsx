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
		"content": `<style>.fv3dtsb5n {
  fill: currentColor;
  d: path("M8.5 4.5A.5.5 0 0 0 8 4H6l-.22.006A4 4 0 0 0 6 12h2l.09-.008A.5.5 0 0 0 8 11H6l-.197-.006A3 3 0 0 1 6 5h2l.09-.008A.5.5 0 0 0 8.5 4.5M18 8a4 4 0 0 0-4-4h-2l-.09.008A.5.5 0 0 0 12 5h2l.197.006a3 3 0 0 1 2.44 4.425q.466.197.883.471A4 4 0 0 0 18 8m-4-.5H6l-.09.008A.5.5 0 0 0 6 8.5h8l.09-.008A.5.5 0 0 0 14 7.5m5 7a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15z");
}
</style><path class="fv3dtsb5n"/>`,
		"fallback": "fluent:link-add-20-regular",
	});
}

export default Component;
