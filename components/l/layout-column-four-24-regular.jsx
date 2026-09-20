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
		"content": `<style>.pywn-sx_q {
  fill: currentColor;
  d: path("M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zM4.5 6.25c0-.966.784-1.75 1.75-1.75H7v15h-.75a1.75 1.75 0 0 1-1.75-1.75zm4 13.25v-15h2.75v15zm4.25 0v-15h2.75v15zm4.25 0v-15h.75c.966 0 1.75.784 1.75 1.75v11.5a1.75 1.75 0 0 1-1.75 1.75z");
}
</style><path class="pywn-sx_q"/>`,
		"fallback": "fluent:layout-column-four-24-regular",
	});
}

export default Component;
