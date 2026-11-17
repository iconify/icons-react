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
		"content": `<style>.resszlbcm {
  fill: currentColor;
  d: path("M11 2v2a1 1 0 0 0 2 0V2h4a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1ZM9.236 8.832a3 3 0 1 0 5.527 2.335a3 3 0 0 0-5.527-2.335M10.01 14H10a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M14 14a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm-3.99 3H10a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M14 17a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Z");
}
</style><path class="resszlbcm"/>`,
		"fallback": "coolicons:remote-control-fill-sharp",
	});
}

export default Component;
