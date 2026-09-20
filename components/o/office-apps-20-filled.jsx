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
		"content": `<style>.c-v9vibjs {
  fill: currentColor;
  d: path("M4.25 14a1.75 1.75 0 1 1 0 3.5a1.75 1.75 0 0 1 0-3.5M10 14a1.75 1.75 0 1 1 0 3.5a1.75 1.75 0 0 1 0-3.5m5.75 0a1.75 1.75 0 1 1 0 3.5a1.75 1.75 0 0 1 0-3.5M4.25 8.25a1.75 1.75 0 1 1 0 3.5a1.75 1.75 0 0 1 0-3.5m5.75 0a1.75 1.75 0 1 1 0 3.5a1.75 1.75 0 0 1 0-3.5m5.75 0a1.75 1.75 0 1 1 0 3.5a1.75 1.75 0 0 1 0-3.5M4.25 2.5a1.75 1.75 0 1 1 0 3.5a1.75 1.75 0 0 1 0-3.5m5.75 0A1.75 1.75 0 1 1 10 6a1.75 1.75 0 0 1 0-3.5m5.75 0a1.75 1.75 0 1 1 0 3.5a1.75 1.75 0 0 1 0-3.5");
}
</style><path class="c-v9vibjs"/>`,
		"fallback": "fluent:office-apps-20-filled",
	});
}

export default Component;
