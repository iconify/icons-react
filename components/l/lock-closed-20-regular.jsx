import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wo5rk0e1t {
  fill: currentColor;
  d: path("M10 1a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v6a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 4 15.5v-6a2.5 2.5 0 0 1 2-2.45V5a4 4 0 0 1 4-4M6.5 8A1.5 1.5 0 0 0 5 9.5v6A1.5 1.5 0 0 0 6.5 17h7a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 13.5 8zm3.5 3.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2M10 2a3 3 0 0 0-3 3v2h6V5a3 3 0 0 0-3-3");
}
</style><path class="wo5rk0e1t"/>`,
		"fallback": "fluent:lock-closed-20-regular",
	});
}

export default Component;
