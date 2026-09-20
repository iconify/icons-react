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
		"content": `<style>.rd0urmbwk {
  fill: currentColor;
  d: path("M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75zM6.25 4.5A1.75 1.75 0 0 0 4.5 6.25v11.5c0 .966.784 1.75 1.75 1.75H8.5v-15zm7.75 15v-4h-4v4zm1.5 0h2.25a1.75 1.75 0 0 0 1.75-1.75V15.5h-4zm0-5.5h4v-4h-4zM14 10h-4v4h4zm0-1.5v-4h-4v4zm1.5 0h4V6.25a1.75 1.75 0 0 0-1.75-1.75H15.5z");
}
</style><path class="rd0urmbwk"/>`,
		"fallback": "fluent:table-freeze-column-24-regular",
	});
}

export default Component;
