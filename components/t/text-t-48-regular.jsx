import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rbbgiacml {
  fill: currentColor;
  d: path("M10 9.25c0-.69.56-1.25 1.25-1.25h25.5c.69 0 1.25.56 1.25 1.25V14a1.25 1.25 0 1 1-2.5 0v-3.5H25.25v27h3.5a1.25 1.25 0 1 1 0 2.5h-9.5a1.25 1.25 0 1 1 0-2.5h3.5v-27H12.5V14a1.25 1.25 0 1 1-2.5 0z");
}
</style><path class="rbbgiacml"/>`,
		"fallback": "fluent:text-t-48-regular",
	});
}

export default Component;
