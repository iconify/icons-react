import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wwi586bmn {
  fill: currentColor;
  d: path("M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12m2.53-6.72L5.78 8.03a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 0 1 1.06-1.06l.47.47l2.22-2.22a.75.75 0 0 1 1.06 1.06");
}
</style><path class="wwi586bmn"/>`,
		"fallback": "fluent:presence-available-12-filled",
	});
}

export default Component;
