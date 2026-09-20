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
		"content": `<style>.d45pgtidt {
  fill: currentColor;
  d: path("M6.75 3A3.75 3.75 0 0 0 3 6.75v6.5h22v-6.5A3.75 3.75 0 0 0 21.25 3zM25 14.75H3v6.5A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25z");
}
</style><path class="d45pgtidt"/>`,
		"fallback": "fluent:layout-row-two-28-filled",
	});
}

export default Component;
