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
		"content": `<style>.tldjdxb6d {
  fill: currentColor;
  d: path("M10.5 17.5v-1h5v1zm-4.45-.192l-4.963-4.964l.713-.713l4.25 4.25l9.15-9.15l.714.713zM14.5 13.5v-1h5v1zm4-4v-1h5v1z");
}
</style><path class="tldjdxb6d"/>`,
		"fallback": "material-symbols-light:sweep-outline",
	});
}

export default Component;
