import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xq_dojbll {
  fill: currentColor;
  d: path("M13.25 5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 13.25 14h-7.5A1.75 1.75 0 0 1 4 12.25v-5.5C4 5.784 4.784 5 5.75 5zm-7.5 1a.75.75 0 0 0-.75.75v5.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-5.5a.75.75 0 0 0-.75-.75zm4.5-4c.966 0 1.75.784 1.75 1.75V4h-1v-.25a.75.75 0 0 0-.75-.75h-5.5A2.75 2.75 0 0 0 2 5.75v3.5c0 .414.336.75.75.75H3v1h-.25A1.75 1.75 0 0 1 1 9.25v-3.5A3.75 3.75 0 0 1 4.75 2z");
}
</style><path class="xq_dojbll"/>`,
		"fallback": "fluent:slide-multiple-16-regular",
	});
}

export default Component;
