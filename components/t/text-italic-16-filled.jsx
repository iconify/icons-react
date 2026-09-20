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
		"content": `<style>.btuobxfoj {
  fill: currentColor;
  d: path("M12.8 2H7a.75.75 0 0 0 0 1.5h2.01l-3.428 9H3.2a.75.75 0 0 0 0 1.5H9a.75.75 0 0 0 0-1.5H7.188l3.428-9H12.8a.75.75 0 0 0 0-1.5");
}
</style><path class="btuobxfoj"/>`,
		"fallback": "fluent:text-italic-16-filled",
	});
}

export default Component;
