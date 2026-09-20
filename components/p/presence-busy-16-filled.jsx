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
		"content": `<style>.iuqq3yhus {
  fill: currentColor;
  d: path("M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0");
}
</style><path class="iuqq3yhus"/>`,
		"fallback": "fluent:presence-busy-16-filled",
	});
}

export default Component;
