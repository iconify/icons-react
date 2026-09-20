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
		"content": `<style>.uh61ahe1u {
  fill: currentColor;
  d: path("M4.5 3A1.5 1.5 0 0 0 3 4.5v1a.5.5 0 0 1-1 0v-1A2.5 2.5 0 0 1 4.5 2h1a.5.5 0 0 1 0 1zm1 1A1.5 1.5 0 0 0 4 5.5v5A1.5 1.5 0 0 0 5.5 12h5a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 10.5 4zm6-1A1.5 1.5 0 0 1 13 4.5v1a.5.5 0 0 0 1 0v-1A2.5 2.5 0 0 0 11.5 2h-1a.5.5 0 0 0 0 1zm0 10a1.5 1.5 0 0 0 1.5-1.5v-1a.5.5 0 0 1 1 0v1a2.5 2.5 0 0 1-2.5 2.5h-1a.5.5 0 0 1 0-1zm-7 0A1.5 1.5 0 0 1 3 11.5v-1.25a.5.5 0 0 0-1 0v1.25A2.5 2.5 0 0 0 4.5 14h1.25a.5.5 0 0 0 0-1z");
}
</style><path class="uh61ahe1u"/>`,
		"fallback": "fluent:large-16-filled",
	});
}

export default Component;
