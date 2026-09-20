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
		"content": `<style>.ngdojo--z {
  fill: currentColor;
  d: path("M8.5 14h3a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2h-3zm-1-12h-3A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h3z");
}
</style><path class="ngdojo--z"/>`,
		"fallback": "fluent:layout-column-two-16-filled",
	});
}

export default Component;
