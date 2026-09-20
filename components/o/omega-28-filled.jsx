import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yau_xwb1v {
  fill: currentColor;
  d: path("M14 2c6.627 0 12 5.373 12 12c0 3-1.315 5.534-2.706 7.38a19 19 0 0 1-2.41 2.62H25a1 1 0 1 1 0 2h-5.508a1.493 1.493 0 0 1-1.484-1.34L18 24.508l.01-.179c.05-.41.263-.779.59-1.026a16.7 16.7 0 0 0 3.097-3.125C22.942 18.525 24 16.408 24 14c0-5.523-4.477-10-10-10S4 8.477 4 14c0 2.407 1.058 4.525 2.303 6.178A16.7 16.7 0 0 0 9.4 23.303c.373.282.6.724.6 1.205C10 25.332 9.332 26 8.508 26H3a1 1 0 1 1 0-2h4.116a19 19 0 0 1-2.41-2.62C3.316 19.535 2 17 2 14C2 7.373 7.373 2 14 2");
}
</style><path class="yau_xwb1v"/>`,
		"fallback": "fluent:omega-28-filled",
	});
}

export default Component;
