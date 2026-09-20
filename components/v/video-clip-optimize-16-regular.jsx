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
		"content": `<style>.e5ivwdd8t {
  fill: currentColor;
  d: path("M2 4.5A2.5 2.5 0 0 1 4.5 2a.5.5 0 0 0 0-1A3.5 3.5 0 0 0 1 4.5a.5.5 0 0 0 1 0m4.5 5.68V5.82a.32.32 0 0 1 .487-.272l3.259 1.991a.54.54 0 0 1 0 .922l-3.26 1.992a.32.32 0 0 1-.486-.274M4.5 14A2.5 2.5 0 0 1 2 11.5a.5.5 0 0 0-1 0A3.5 3.5 0 0 0 4.5 15a.5.5 0 0 0 0-1M14 4.5A2.5 2.5 0 0 0 11.5 2a.5.5 0 0 1 0-1A3.5 3.5 0 0 1 15 4.5a.5.5 0 0 1-1 0M11.5 14a2.5 2.5 0 0 0 2.5-2.5a.5.5 0 0 1 1 0a3.5 3.5 0 0 1-3.5 3.5a.5.5 0 0 1 0-1m-6-11A2.5 2.5 0 0 0 3 5.5v5A2.5 2.5 0 0 0 5.5 13h5a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 10.5 3zM4 5.5A1.5 1.5 0 0 1 5.5 4h5A1.5 1.5 0 0 1 12 5.5v5a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 10.5z");
}
</style><path class="e5ivwdd8t"/>`,
		"fallback": "fluent:video-clip-optimize-16-regular",
	});
}

export default Component;
