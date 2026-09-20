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
		"content": `<style>.cbm4qg3bs {
  fill: currentColor;
  d: path("M13.25 5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 13.25 14h-7.5A1.75 1.75 0 0 1 4 12.25v-5.5C4 5.784 4.784 5 5.75 5zm-3-3c.966 0 1.75.784 1.75 1.75V4H5.75A2.75 2.75 0 0 0 3 6.75V11h-.25A1.75 1.75 0 0 1 1 9.25v-3.5A3.75 3.75 0 0 1 4.75 2z");
}
</style><path class="cbm4qg3bs"/>`,
		"fallback": "fluent:slide-multiple-16-filled",
	});
}

export default Component;
