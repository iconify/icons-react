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
		"content": `<style>.a761kcb_m {
  fill: currentColor;
  d: path("M12.5 16.5h1v-9h-3v1h2zM20 20H4V4h16zM5 19h14V5H5zM5 5v14z");
}
</style><path class="a761kcb_m"/>`,
		"fallback": "material-symbols-light:looks-one-outline-sharp",
	});
}

export default Component;
