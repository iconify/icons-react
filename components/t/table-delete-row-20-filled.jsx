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
		"content": `<style>.t-l_1ubmo {
  fill: currentColor;
  d: path("M12 6H8V2h4zM3.5 2H7v4H5a2 2 0 0 1-2-2V2.5a.5.5 0 0 1 .5-.5M15 6h-2V2h3.5a.5.5 0 0 1 .5.5V4a2 2 0 0 1-2 2m1.5 12a.5.5 0 0 0 .5-.5V16a2 2 0 0 0-2-2h-2v4zM12 18v-4H8v4zm-5 0H3.5a.5.5 0 0 1-.5-.5V16a2 2 0 0 1 2-2h2zm10.5-7.5a.5.5 0 0 0 0-1h-4.887c-.106.125-.224.24-.342.353l-.143.14l.143.14c.122.119.245.237.353.367zm-15-1h4.887a5 5 0 0 0 .342.353l.143.14l-.143.14a5 5 0 0 0-.353.367H2.5a.5.5 0 0 1 0-1m9.354 2.354a.5.5 0 0 0 0-.708L10.707 10l1.147-1.146a.5.5 0 0 0-.708-.708L10 9.293L8.854 8.146a.5.5 0 1 0-.708.708L9.293 10l-1.147 1.146a.5.5 0 0 0 .708.708L10 10.707l1.146 1.147a.5.5 0 0 0 .708 0");
}
</style><path class="t-l_1ubmo"/>`,
		"fallback": "fluent:table-delete-row-20-filled",
	});
}

export default Component;
