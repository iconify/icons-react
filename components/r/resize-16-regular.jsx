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
		"content": `<style>.l10vl5www {
  fill: currentColor;
  d: path("M6.5 2h-2A2.5 2.5 0 0 0 2 4.5a.5.5 0 0 0 1 0A1.5 1.5 0 0 1 4.5 3h2a.5.5 0 0 0 0-1m-2 11h3A1.5 1.5 0 0 0 9 11.5v-3A1.5 1.5 0 0 0 7.5 7h-3A1.5 1.5 0 0 0 3 8.5v3A1.5 1.5 0 0 0 4.5 13m0 1A2.5 2.5 0 0 1 2 11.5v-3A2.5 2.5 0 0 1 4.5 6h3A2.5 2.5 0 0 1 10 8.5v3A2.5 2.5 0 0 1 7.5 14zm7 0a.5.5 0 0 1 0-1a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 1 1 0v2a2.5 2.5 0 0 1-2.5 2.5M14 6.5a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 0 11.5 3h-2a.5.5 0 0 1 0-1h2A2.5 2.5 0 0 1 14 4.5z");
}
</style><path class="l10vl5www"/>`,
		"fallback": "fluent:resize-16-regular",
	});
}

export default Component;
