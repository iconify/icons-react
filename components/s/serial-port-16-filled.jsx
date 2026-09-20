import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.x9noqo-yf {
  fill: currentColor;
  d: path("M1.078 7.47A2 2 0 0 1 3.022 5h9.97a2 2 0 0 1 1.944 2.47l-.726 3A2 2 0 0 1 12.266 12h-8.52a2 2 0 0 1-1.943-1.53zM5 8a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m1.5 1.5a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0M8 10a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0M7 8a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0M11 8a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1");
}
</style><path class="x9noqo-yf"/>`,
		"fallback": "fluent:serial-port-16-filled",
	});
}

export default Component;
