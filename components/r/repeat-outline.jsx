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
		"content": `<style>.fs4vsd2ee {
  fill: currentColor;
  d: path("M7.308 21L4 17.692l3.308-3.307l.708.719l-2.089 2.088h11.38v-4h1v5H5.928l2.089 2.089zM5.692 10.808v-5h12.381l-2.089-2.089l.708-.719L20 6.308l-3.308 3.308l-.707-.72l2.088-2.088H6.693v4z");
}
</style><path class="fs4vsd2ee"/>`,
		"fallback": "material-symbols-light:repeat-outline",
	});
}

export default Component;
