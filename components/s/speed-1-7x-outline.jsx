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
		"content": `<style>.lpc-9zbhi {
  fill: currentColor;
  d: path("M6.616 16.5v-1h1v1zm-2.385 0v-8H2.423v-1h2.808v9zm10.615 0l2.808-4.692L15.077 7.5h1.115l2.02 3.383L20.23 7.5h1.077l-2.558 4.27l2.827 4.73h-1.115l-2.27-3.786l-2.269 3.786zm-4.634 0l2-8H8.25v-1h4.058q.379 0 .66.268t.282.648q0 .25-.07.43L11.25 16.5z");
}
</style><path class="lpc-9zbhi"/>`,
		"fallback": "material-symbols-light:speed-1-7x-outline",
	});
}

export default Component;
