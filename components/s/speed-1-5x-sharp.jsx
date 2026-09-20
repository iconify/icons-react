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
		"content": `<style>.aokembcxo {
  fill: currentColor;
  d: path("M6.616 16.5v-1h1v1zm-2.385 0v-8H2.423v-1h2.808v9zm11.115 0l2.808-4.692L15.577 7.5h1.115l2.02 3.383L20.73 7.5h1.077l-2.558 4.27l2.827 4.73h-1.115l-2.27-3.786l-2.269 3.786zM9 16.5v-1h3.98v-3H9v-5h4.98v1H10v3h3.98v5z");
}
</style><path class="aokembcxo"/>`,
		"fallback": "material-symbols-light:speed-1-5x-sharp",
	});
}

export default Component;
