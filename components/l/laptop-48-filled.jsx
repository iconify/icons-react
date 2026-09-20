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
		"content": `<style>.y64z7we5d {
  fill: currentColor;
  d: path("M8 12.25A4.25 4.25 0 0 1 12.25 8h23.5A4.25 4.25 0 0 1 40 12.25v15.5A4.25 4.25 0 0 1 35.75 32h-23.5A4.25 4.25 0 0 1 8 27.75zM5.25 35.5a1.25 1.25 0 1 0 0 2.5h37.5a1.25 1.25 0 1 0 0-2.5z");
}
</style><path class="y64z7we5d"/>`,
		"fallback": "fluent:laptop-48-filled",
	});
}

export default Component;
