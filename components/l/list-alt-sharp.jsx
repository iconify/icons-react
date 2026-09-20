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
		"content": `<style>.amie15blm {
  fill: currentColor;
  d: path("M7.346 16.539h1.539V15H7.346zm0-3.77h1.539v-1.538H7.346zm0-3.769h1.539V7.462H7.346zm3.846 7.27h5.385v-1h-5.385zm0-3.77h5.385v-1h-5.385zm0-3.77h5.385v-1h-5.385zM4 20V4h16v16z");
}
</style><path class="amie15blm"/>`,
		"fallback": "material-symbols-light:list-alt-sharp",
	});
}

export default Component;
