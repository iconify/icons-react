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
		"content": `<style>.kgdpbzf6v {
  fill: currentColor;
  d: path("M12 11.5a1 1 0 1 1 2 0v9a1 1 0 1 1-2 0zm7-1a1 1 0 0 0-1 1v9a1 1 0 1 0 2 0v-9a1 1 0 0 0-1-1M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14s14-6.268 14-14S23.732 2 16 2M4 16C4 9.373 9.373 4 16 4s12 5.373 12 12s-5.373 12-12 12S4 22.627 4 16");
}
</style><path class="kgdpbzf6v"/>`,
		"fallback": "fluent:pause-circle-32-regular",
	});
}

export default Component;
