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
		"content": `<style>.a8amkxdem {
  fill: currentColor;
  d: path("M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5zM4 21v3.5A3.5 3.5 0 0 0 7.5 28H11v-7zm7-1v-8H4v8zm1 1v7h8v-7zm8-1v-8h-8v8zm1 1v7h3.5a3.5 3.5 0 0 0 3.5-3.5V21zm7-1v-8h-7v8zM7.5 4A3.5 3.5 0 0 0 4 7.5V11h7V4zM20 4h-8v7h8zm1 0v7h7V7.5A3.5 3.5 0 0 0 24.5 4z");
}
</style><path class="a8amkxdem"/>`,
		"fallback": "fluent:table-32-light",
	});
}

export default Component;
