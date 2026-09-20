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
		"content": `<style>.p74p68bjk {
  fill: currentColor;
  d: path("M4.5 2A2.5 2.5 0 0 0 2 4.5v6A2.5 2.5 0 0 0 4.5 13H7v2.5A2.5 2.5 0 0 0 9.5 18h6a2.5 2.5 0 0 0 2.5-2.5v-6A2.5 2.5 0 0 0 15.5 7H13V4.5A2.5 2.5 0 0 0 10.5 2z");
}
</style><path class="p74p68bjk"/>`,
		"fallback": "fluent:shape-union-20-filled",
	});
}

export default Component;
