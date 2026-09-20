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
		"content": `<style>.e11hhq6dv {
  fill: currentColor;
  d: path("M14 3a3 3 0 0 1 3 3v1.5a.5.5 0 0 1-1 0V6a2 2 0 0 0-2-2h-1.5a.5.5 0 0 1 0-1zM6 3a3 3 0 0 0-3 3v1.5a.5.5 0 0 0 1 0V6a2 2 0 0 1 2-2h1.5a.5.5 0 0 0 0-1zm8 14a3 3 0 0 0 3-3v-1.5a.5.5 0 0 0-1 0V14a2 2 0 0 1-2 2h-1.5a.5.5 0 0 0 0 1zM3 14a3 3 0 0 0 3 3h1.5a.5.5 0 0 0 0-1H6a2 2 0 0 1-2-2v-1.5a.5.5 0 0 0-1 0zm7-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-1a1 1 0 1 1 0-2a1 1 0 0 1 0 2M6.5 7.25a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5");
}
</style><path class="e11hhq6dv"/>`,
		"fallback": "fluent:search-visual-20-regular",
	});
}

export default Component;
