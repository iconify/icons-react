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
		"content": `<style>.jfux8tb0k {
  fill: currentColor;
  d: path("M9.854 5.854a.5.5 0 0 0-.708-.708L6.5 7.793L5.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0zM2 4.5A2.5 2.5 0 0 1 4.5 2h5A2.5 2.5 0 0 1 12 4.5v5A2.5 2.5 0 0 1 9.5 12h-5A2.5 2.5 0 0 1 2 9.5zM4.5 3A1.5 1.5 0 0 0 3 4.5v5A1.5 1.5 0 0 0 4.5 11h5A1.5 1.5 0 0 0 11 9.5v-5A1.5 1.5 0 0 0 9.5 3zM7 14a2.5 2.5 0 0 1-2-1h4.5A3.5 3.5 0 0 0 13 9.5V4c.607.456 1 1.182 1 2v3.5A4.5 4.5 0 0 1 9.5 14z");
}
</style><path class="jfux8tb0k"/>`,
		"fallback": "fluent:select-all-on-16-regular",
	});
}

export default Component;
