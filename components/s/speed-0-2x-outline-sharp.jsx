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
		"content": `<style>.n4kbp1byq {
  fill: currentColor;
  d: path("M4 16.5v-1h1v1zm2.5 0v-5h4v-3h-4v-1h5v5h-4v3h4v1zm6.77 0l2.807-4.692L13.5 7.5h1.116l2.019 3.383L18.654 7.5h1.077l-2.558 4.27L20 16.5h-1.115l-2.27-3.786l-2.269 3.786z");
}
</style><path class="n4kbp1byq"/>`,
		"fallback": "material-symbols-light:speed-0-2x-outline-sharp",
	});
}

export default Component;
