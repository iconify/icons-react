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
		"content": `<style>.rudiwnbew {
  fill: currentColor;
  d: path("M5.5 4a2 2 0 0 1 2-1.998h5A2 2 0 0 1 14.5 4h.996a1.5 1.5 0 0 1 1.5 1.5v1.505c0 .448-.098.873-.274 1.254a3 3 0 0 0-.996-.25c.172-.295.27-.638.27-1.004V5.5a.5.5 0 0 0-.5-.5h-.995v3.17A3 3 0 0 0 12.5 11v.063A2 2 0 0 0 11 13v.389a5 5 0 0 1-.5.084v1.495h.5V17c0 .351.09.681.25.968H6.004a.5.5 0 0 1-.5-.5v-.5a2 2 0 0 1 2-2h1.997v-1.495a4.5 4.5 0 0 1-3.895-3.501a3.006 3.006 0 0 1-2.61-2.974V5.5a1.5 1.5 0 0 1 1.5-1.5zm0 1H4.497a.5.5 0 0 0-.5.5v1.498c0 .93.64 1.713 1.505 1.936zm8 6v1H13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 1 0-4 0m1 1v-1a1 1 0 1 1 2 0v1zm1 2.25a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5");
}
</style><path class="rudiwnbew"/>`,
		"fallback": "fluent:trophy-lock-20-filled",
	});
}

export default Component;
