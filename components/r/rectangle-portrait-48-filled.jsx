import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.got74ghtl {
  fill: currentColor;
  d: path("M14.25 44A6.25 6.25 0 0 1 8 37.75v-27.5A6.25 6.25 0 0 1 14.25 4h19.5A6.25 6.25 0 0 1 40 10.25v27.5A6.25 6.25 0 0 1 33.75 44z");
}
</style><path class="got74ghtl"/>`,
		"fallback": "fluent:rectangle-portrait-48-filled",
	});
}

export default Component;
