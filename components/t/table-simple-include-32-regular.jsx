import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.zie2ihbiz {
  fill: currentColor;
  d: path("M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v7.286a4.74 4.74 0 0 0-2-1.12V7.5A2.5 2.5 0 0 0 24.5 5H17v8.666a4.74 4.74 0 0 0-2 1.12V5H7.5A2.5 2.5 0 0 0 5 7.5V15h9.786a4.74 4.74 0 0 0-1.12 2H5v7.5A2.5 2.5 0 0 0 7.5 27h6.166c.207.76.597 1.443 1.12 2H7.5A4.5 4.5 0 0 1 3 24.5zm12 10.75A3.25 3.25 0 0 1 18.25 15h7.5A3.25 3.25 0 0 1 29 18.25v7.5A3.25 3.25 0 0 1 25.75 29h-7.5A3.25 3.25 0 0 1 15 25.75z");
}
</style><path class="zie2ihbiz"/>`,
		"fallback": "fluent:table-simple-include-32-regular",
	});
}

export default Component;
