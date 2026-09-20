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
		"content": `<style>.vqre6snkd {
  fill: currentColor;
  d: path("M4 7.5a1.5 1.5 0 0 1 2.75-.83a1 1 0 0 0 1.663-1.11A3.5 3.5 0 1 0 5.483 11H21a1 1 0 1 0 0-2H5.5A1.5 1.5 0 0 1 4 7.5M12 5a1 1 0 1 0 0 2h13a1 1 0 1 0 0-2zm-5 8a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2zm-5 5a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m5 3a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2z");
}
</style><path class="vqre6snkd"/>`,
		"fallback": "fluent:reading-list-28-filled",
	});
}

export default Component;
