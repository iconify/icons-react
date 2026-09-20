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
		"content": `<style>.pu_cb1jro {
  fill: currentColor;
  d: path("M5 6a4 4 0 1 1 8 0a4 4 0 0 1-8 0m4-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6M2 13c0-1.113.903-2 2.009-2h6.248a5.5 5.5 0 0 0-.657 1H4.009C3.448 12 3 12.447 3 13c0 1.309.622 2.284 1.673 2.953C5.743 16.636 7.265 17 9 17q.3 0 .592-.015q.261.513.618.958Q9.617 18 9 18c-1.855 0-3.583-.386-4.865-1.203C2.833 15.967 2 14.69 2 13m17 1.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.646-1.146a.5.5 0 0 0-.708-.708L14.5 13.793l-1.146-1.147a.5.5 0 0 0-.708.708l1.147 1.146l-1.147 1.146a.5.5 0 0 0 .708.708l1.146-1.147l1.146 1.147a.5.5 0 0 0 .708-.708L15.207 14.5z");
}
</style><path class="pu_cb1jro"/>`,
		"fallback": "fluent:person-delete-20-regular",
	});
}

export default Component;
