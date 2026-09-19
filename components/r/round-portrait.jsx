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
		"content": `<style>.l1lq-11pc {
  fill: currentColor;
  d: path("M12 12.25c1.24 0 2.25-1.01 2.25-2.25S13.24 7.75 12 7.75S9.75 8.76 9.75 10s1.01 2.25 2.25 2.25m4.5 4c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V17h9zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-1 16H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1");
}
</style><path class="l1lq-11pc"/>`,
		"fallback": "ic:round-portrait",
	});
}

export default Component;
