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
		"content": `<style>.xd5f54bxv {
  fill: currentColor;
  d: path("M2.75 7.75a.75.75 0 0 1 .75.75v2h13v-2a.75.75 0 0 1 1.5 0v2a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 2 10.5v-2a.75.75 0 0 1 .75-.75");
}
</style><path class="xd5f54bxv"/>`,
		"fallback": "fluent:spacebar-20-filled",
	});
}

export default Component;
