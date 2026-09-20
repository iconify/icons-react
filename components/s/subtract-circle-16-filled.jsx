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
		"content": `<style>.kpu8debip {
  fill: currentColor;
  d: path("M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m4-.5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1z");
}
</style><path class="kpu8debip"/>`,
		"fallback": "fluent:subtract-circle-16-filled",
	});
}

export default Component;
