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
		"content": `<style>.j85zehtjp {
  fill: currentColor;
  d: path("M7.5 11.5v.5a.5.5 0 0 1-.5.5H6v.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1.293A1 1 0 0 1 2.293 11l3.87-3.87A4 4 0 1 1 10 10H8.999v1a.5.5 0 0 1-.5.5zM11 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2");
}
</style><path class="j85zehtjp"/>`,
		"fallback": "fluent:key-16-filled",
	});
}

export default Component;
