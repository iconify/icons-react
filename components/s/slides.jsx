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
		"content": `<style>.bf2fv_qav {
  fill: currentColor;
  d: path("M7 19h10v-7H7Zm1.5-1.5v-4h7v4ZM6 22q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h8l6 6v12q0 .825-.587 1.413Q18.825 22 18 22Zm7-13h5l-5-5Z");
}
</style><path class="bf2fv_qav"/>`,
		"fallback": "material-symbols:slides",
	});
}

export default Component;
