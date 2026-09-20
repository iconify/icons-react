import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qw1ebyb8x {
  fill: currentColor;
  d: path("M11.5 12A2.5 2.5 0 0 1 9 9.5V3H7.5A4.5 4.5 0 0 0 3 7.5v17a4.5 4.5 0 0 0 4 4.473V18.5A2.5 2.5 0 0 1 9.5 16h13a2.5 2.5 0 0 1 2.5 2.5v10.473a4.5 4.5 0 0 0 4-4.473V10.45a4.5 4.5 0 0 0-1.318-3.182l-2.95-2.95A4.5 4.5 0 0 0 22 3.023V9.5a2.5 2.5 0 0 1-2.5 2.5zM20 3h-9v6.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5zm3 26H9V18.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5z");
}
</style><path class="qw1ebyb8x"/>`,
		"fallback": "fluent:save-32-filled",
	});
}

export default Component;
