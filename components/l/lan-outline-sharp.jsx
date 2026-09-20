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
		"content": `<style>.iuyi89bfv {
  fill: currentColor;
  d: path("M3 22v-7h3v-4h5V9H8V2h8v7h-3v2h5v4h3v7h-8v-7h3v-2H8v2h3v7zm7-15h4V4h-4zM5 20h4v-3H5zm10 0h4v-3h-4zm0-3");
}
</style><path class="iuyi89bfv"/>`,
		"fallback": "material-symbols:lan-outline-sharp",
	});
}

export default Component;
