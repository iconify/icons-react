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
		"content": `<style>.a7y5oabpo {
  fill: currentColor;
  d: path("M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zM6 7.5a2 2 0 1 0 0 4a2 2 0 0 0 0-4m3.5.5a.5.5 0 0 0-.5.5V11a.5.5 0 0 0 1 0V8.5a.5.5 0 0 0-.5-.5m2-1a.5.5 0 0 0-.5.5V11a.5.5 0 0 0 1 0V7.5a.5.5 0 0 0-.5-.5M6 8.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2M4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z");
}
</style><path class="a7y5oabpo"/>`,
		"fallback": "fluent:layout-infographic-16-filled",
	});
}

export default Component;
