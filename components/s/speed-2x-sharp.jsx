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
		"content": `<style>.tsbtm4uap {
  fill: currentColor;
  d: path("M5.885 16.5v-5h4v-3h-4v-1h5v5h-4v3h4v1zm6.384 0l2.808-4.692L12.5 7.5h1.116l2.019 3.383L17.654 7.5h1.077l-2.558 4.27L19 16.5h-1.115l-2.27-3.786l-2.269 3.786z");
}
</style><path class="tsbtm4uap"/>`,
		"fallback": "material-symbols-light:speed-2x-sharp",
	});
}

export default Component;
