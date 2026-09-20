import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.p4z0qab3n {
  fill: currentColor;
  d: path("M13 10v8h1.5v-8zM3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75v14.5A3.75 3.75 0 0 1 21.25 25H6.75A3.75 3.75 0 0 1 3 21.25zm20.5 0a2.25 2.25 0 0 0-2.25-2.25H14.5v3h9zM13 7.5v-3H6.75A2.25 2.25 0 0 0 4.5 6.75v.75zM4.5 19h19V9h-19zm0 1.5v.75a2.25 2.25 0 0 0 2.25 2.25H13v-3zm10 0v3h6.75a2.25 2.25 0 0 0 2.25-2.25v-.75z");
}
</style><path class="p4z0qab3n"/>`,
		"fallback": "fluent:table-cells-split-28-regular",
	});
}

export default Component;
