import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.s305b3v0t {
  fill: currentColor;
  d: path("M13.5 11a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM3 4.5A1.5 1.5 0 0 1 4.5 3H14a2 2 0 0 1 2 2v.268A2 2 0 0 1 17 7v8a2 2 0 0 1-2 2H5.5A2.5 2.5 0 0 1 3 14.5zM14 4H4.5a.5.5 0 0 0 0 1H15a1 1 0 0 0-1-1M4.5 6q-.264-.001-.5-.085V14.5A1.5 1.5 0 0 0 5.5 16H15a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z");
}
</style><path class="s305b3v0t"/>`,
		"fallback": "fluent:wallet-20-regular",
	});
}

export default Component;
