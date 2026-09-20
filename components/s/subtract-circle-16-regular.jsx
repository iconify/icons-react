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
		"content": `<style>.xhfrnnbps {
  fill: currentColor;
  d: path("M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m6-7a7 7 0 1 0 0 14A7 7 0 0 0 8 1M5 7.5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1z");
}
</style><path class="xhfrnnbps"/>`,
		"fallback": "fluent:subtract-circle-16-regular",
	});
}

export default Component;
