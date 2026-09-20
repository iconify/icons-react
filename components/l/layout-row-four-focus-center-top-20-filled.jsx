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
		"content": `<style>.r1rgu-bue {
  fill: currentColor;
  d: path("M14 3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm2 3a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v1h12zm0 4H4v2.5h12zM4 14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-.5H4z");
}
</style><path class="r1rgu-bue"/>`,
		"fallback": "fluent:layout-row-four-focus-center-top-20-filled",
	});
}

export default Component;
