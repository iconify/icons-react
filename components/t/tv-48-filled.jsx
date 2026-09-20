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
		"content": `<style>.v8vvv8bxf {
  fill: currentColor;
  d: path("M4 12.75A4.75 4.75 0 0 1 8.75 8h30.5A4.75 4.75 0 0 1 44 12.75v18.5A4.75 4.75 0 0 1 39.25 36H8.75A4.75 4.75 0 0 1 4 31.25zm7.25 26.75a1.25 1.25 0 1 0 0 2.5h25.5a1.25 1.25 0 1 0 0-2.5z");
}
</style><path class="v8vvv8bxf"/>`,
		"fallback": "fluent:tv-48-filled",
	});
}

export default Component;
