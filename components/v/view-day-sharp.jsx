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
		"content": `<style>.kzcjnca3y {
  fill: currentColor;
  d: path("M4 18.77v-1h16v1zM4 15V9h16v6zm0-8.77v-1h16v1z");
}
</style><path class="kzcjnca3y"/>`,
		"fallback": "material-symbols-light:view-day-sharp",
	});
}

export default Component;
