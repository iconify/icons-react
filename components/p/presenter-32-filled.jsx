import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.o1oduxavl {
  fill: currentColor;
  d: path("M27 16a1 1 0 0 1 .707 1.707L21 24.414v2.336A3.25 3.25 0 0 1 17.75 30h-3.5A3.25 3.25 0 0 1 11 26.75v-2.336l-6.707-6.707A1 1 0 0 1 5 16zm-8.75-5a3.25 3.25 0 0 1 3.25 3.25v.25h-11v-.25A3.25 3.25 0 0 1 13.75 11zM16 2a3.75 3.75 0 1 1 0 7.5A3.75 3.75 0 0 1 16 2");
}
</style><path class="o1oduxavl"/>`,
		"fallback": "fluent:presenter-32-filled",
	});
}

export default Component;
