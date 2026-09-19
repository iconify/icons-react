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
		"content": `<style>.xz85vr-gg {
  fill: currentColor;
  d: path("m20.11 8l1.16-2c.77-1.33-.19-3-1.73-3H4.47c-1.54 0-2.5 1.67-1.73 3L3.9 8zM7.95 15l2.32 4.01c.77 1.33 2.69 1.33 3.46 0L16.05 15zm11-5H5.05l1.74 3h10.42z");
}
</style><path class="xz85vr-gg"/>`,
		"fallback": "ic:round-tornado",
	});
}

export default Component;
