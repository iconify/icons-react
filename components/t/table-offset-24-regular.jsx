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
		"content": `<style>.c32t2cc2x {
  fill: currentColor;
  d: path("M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zM4.5 6.25c0-.966.784-1.75 1.75-1.75H14v4H4.5zm0 3.75h4v4h-4zm5.5 0h9.5v4H10zm9.5-1.5h-4v-4h2.25c.966 0 1.75.784 1.75 1.75zm-4 7h4v2.25a1.75 1.75 0 0 1-1.75 1.75H15.5zm-11 2.25V15.5H14v4H6.25a1.75 1.75 0 0 1-1.75-1.75");
}
</style><path class="c32t2cc2x"/>`,
		"fallback": "fluent:table-offset-24-regular",
	});
}

export default Component;
