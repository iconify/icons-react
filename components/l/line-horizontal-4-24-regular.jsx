import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dj4v-g-5e {
  fill: currentColor;
  d: path("M21.25 18.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5zm0-5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5zm0-5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5zm0-5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5z");
}
</style><path class="dj4v-g-5e"/>`,
		"fallback": "fluent:line-horizontal-4-24-regular",
	});
}

export default Component;
