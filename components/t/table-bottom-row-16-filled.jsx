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
		"content": `<style>.q0qtc4bhv {
  fill: currentColor;
  d: path("M4.5 2A2.5 2.5 0 0 0 2 4.5V10h1V4.5A1.5 1.5 0 0 1 4.5 3h7A1.5 1.5 0 0 1 13 4.5V10h1V4.5A2.5 2.5 0 0 0 11.5 2zM3 13.5a2.5 2.5 0 0 1-1-2V11h3v3h-.5a2.5 2.5 0 0 1-1.5-.5M13.95 12q.05-.243.05-.5V11h-3v3h.5a2.5 2.5 0 0 0 2.45-2M6 14h4v-3H6z");
}
</style><path class="q0qtc4bhv"/>`,
		"fallback": "fluent:table-bottom-row-16-filled",
	});
}

export default Component;
