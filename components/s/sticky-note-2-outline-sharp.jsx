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
		"content": `<style>.k193bi48h {
  fill: currentColor;
  d: path("M5 19h9v-5h5V5H5zm-1 1V4h16v10.289L14.288 20zm3.885-6.539v-1H12v1zm0-3.961v-1h8.23v1zM5 19V5z");
}
</style><path class="k193bi48h"/>`,
		"fallback": "material-symbols-light:sticky-note-2-outline-sharp",
	});
}

export default Component;
