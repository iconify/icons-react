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
		"content": `<style>.bh6yu79ug {
  fill: currentColor;
  d: path("M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75zM6.25 4.5A1.75 1.75 0 0 0 4.5 6.25V8.5h4v-4zM4.5 10v4h4v-4zm5.5 0v4h4v-4zm5.5 0v4h4v-4zm0 9.5h2.25a1.75 1.75 0 0 0 1.75-1.75V15.5h-4zm0-11h4V6.25a1.75 1.75 0 0 0-1.75-1.75H15.5zm-11 7v2.25c0 .966.784 1.75 1.75 1.75H8.5v-4z");
}
</style><path class="bh6yu79ug"/>`,
		"fallback": "fluent:table-column-top-bottom-24-regular",
	});
}

export default Component;
