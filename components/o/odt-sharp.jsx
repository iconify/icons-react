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
		"content": `<style>.gyjjgrgtw {
  fill: currentColor;
  d: path("M5 15h4V9H5zm1.5-1.5v-3h1v3zM10 15h3.25l.75-.75v-4.5L13.25 9H10zm1.5-1.5v-3h1v3zm4.75 1.5h1.5v-4.5H19V9h-4v1.5h1.25zM2 20V4h20v16z");
}
</style><path class="gyjjgrgtw"/>`,
		"fallback": "material-symbols:odt-sharp",
	});
}

export default Component;
