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
		"content": `<style>.cb3_dubzl {
  fill: currentColor;
  d: path("M19 14h-5v5zM4 20V4h16v10.289L14.288 20zm3.885-6.539H12v-1H7.885zm0-3.961h8.23v-1h-8.23z");
}
</style><path class="cb3_dubzl"/>`,
		"fallback": "material-symbols-light:sticky-note-2-sharp",
	});
}

export default Component;
