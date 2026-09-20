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
		"content": `<style>.wikuhbcxe {
  fill: currentColor;
  d: path("M13.875 2C15.601 2 17 3.4 17 5.125V7h1.875C20.601 7 22 8.4 22 10.125v8.75C22 20.601 20.6 22 18.875 22h-8.75A3.125 3.125 0 0 1 7 18.875V17H5.125A3.125 3.125 0 0 1 2 13.875v-8.75C2 3.399 3.4 2 5.125 2zM5.25 3.5A1.75 1.75 0 0 0 3.5 5.25v8.5c0 .966.784 1.75 1.75 1.75h8.5a1.75 1.75 0 0 0 1.75-1.75v-8.5a1.75 1.75 0 0 0-1.75-1.75z");
}
</style><path class="wikuhbcxe"/>`,
		"fallback": "fluent:square-shadow-24-regular",
	});
}

export default Component;
