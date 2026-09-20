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
		"content": `<style>.zs2a2mb8l {
  fill: currentColor;
  d: path("M5 2.75a.75.75 0 0 0-1.5 0v14.5a.75.75 0 0 0 1.5 0zm11.5 0a.75.75 0 0 0-1.5 0v14.5a.75.75 0 0 0 1.5 0zm-5.75 0a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0zm-1.5 8.5a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-1.5 0zm0 3.5a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-1.5 0z");
}
</style><path class="zs2a2mb8l"/>`,
		"fallback": "fluent:road-20-filled",
	});
}

export default Component;
