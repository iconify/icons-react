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
		"content": `<style>.y6muywbnf {
  fill: currentColor;
  d: path("M8 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11A.5.5 0 0 1 8 2M4.5 5.5A1.5 1.5 0 0 1 6 7v2a1.5 1.5 0 0 1-1.5 1.5h-2A1.5 1.5 0 0 1 1 9V7a1.5 1.5 0 0 1 1.5-1.5zm9 0A1.5 1.5 0 0 1 15 7v2a1.5 1.5 0 0 1-1.5 1.5h-2A1.5 1.5 0 0 1 10 9V7a1.5 1.5 0 0 1 1.5-1.5z");
}
</style><path class="y6muywbnf"/>`,
		"fallback": "fluent:item-compare-16-filled",
	});
}

export default Component;
