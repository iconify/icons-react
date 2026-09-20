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
		"content": `<style>.nre7l_kxl {
  fill: currentColor;
  d: path("M6.25 15h1.5v-4.5H9V9H5v1.5h1.25zm3.25 0h4v-3.65H11v-.85h2.5V9h-4v3.6H12v.9H9.5zm6.25 0h1.5L19 9h-1.5l-1 3.45l-1-3.45H14zM2 20V4h20v16zm2-2h16V6H4zm0 0V6z");
}
</style><path class="nre7l_kxl"/>`,
		"fallback": "material-symbols:tsv-outline-sharp",
	});
}

export default Component;
