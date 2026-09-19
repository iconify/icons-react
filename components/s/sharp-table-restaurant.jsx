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
		"content": `<style>.ro5624blo {
  fill: currentColor;
  d: path("m22.33 11l-2-7H3.67l-2 7H5.2L4 20h2l.67-5h10.67l.66 5h2l-1.2-9zm-15.4 2l.27-2h9.6l.27 2z");
}
</style><path class="ro5624blo"/>`,
		"fallback": "ic:sharp-table-restaurant",
	});
}

export default Component;
