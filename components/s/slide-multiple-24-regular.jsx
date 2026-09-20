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
		"content": `<style>.t-jktjbrd {
  fill: currentColor;
  d: path("M6.75 3A4.75 4.75 0 0 0 2 7.75v7A2.25 2.25 0 0 0 4.25 17h.25v-1.5h-.25a.75.75 0 0 1-.75-.75v-7A3.25 3.25 0 0 1 6.75 4.5h10a.75.75 0 0 1 .75.75v.25H19v-.25A2.25 2.25 0 0 0 16.75 3zm1 3.5A2.25 2.25 0 0 0 5.5 8.75v9.5a2.25 2.25 0 0 0 2.25 2.25h12A2.25 2.25 0 0 0 22 18.25v-9.5a2.25 2.25 0 0 0-2.25-2.25zM7 8.75A.75.75 0 0 1 7.75 8h12a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-.75.75h-12a.75.75 0 0 1-.75-.75z");
}
</style><path class="t-jktjbrd"/>`,
		"fallback": "fluent:slide-multiple-24-regular",
	});
}

export default Component;
