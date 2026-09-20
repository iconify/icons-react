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
		"content": `<style>.y88x5aboq {
  fill: currentColor;
  d: path("M10 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8m2.879 9l-2.94 2.94a3.62 3.62 0 0 0-.748 4.035c-1.544-.098-2.962-.481-4.056-1.178C3.833 15.967 3 14.69 3 13c0-1.113.903-2 2.009-2zm5.475-.353a2.62 2.62 0 0 0-3.708 0l-4 4a2.621 2.621 0 0 0 3.707 3.707l4-4a2.62 2.62 0 0 0 0-3.707m-3 .707a1.621 1.621 0 1 1 2.292 2.293L16 15.293L13.707 13zm-1.5 4.292a.5.5 0 0 1 0 .708l-1 1a.5.5 0 0 1-.708-.708l1-1a.5.5 0 0 1 .708 0");
}
</style><path class="y88x5aboq"/>`,
		"fallback": "fluent:person-pill-20-filled",
	});
}

export default Component;
