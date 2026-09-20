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
		"content": `<style>.ekimmoull {
  fill: currentColor;
  d: path("M2 20v-7l5-5V3h10v5l5 5v7zm3.8-8h12.4L15 8.8V5H9v3.8zM4 18h16v-4H4zm6-1.3v-1.5h4v1.5z");
}
</style><path class="ekimmoull"/>`,
		"fallback": "material-symbols:range-hood-outline-sharp",
	});
}

export default Component;
