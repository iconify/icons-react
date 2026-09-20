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
		"content": `<style>.gpzq2z1ua {
  fill: currentColor;
  d: path("M8.75 8A4.75 4.75 0 0 0 4 12.75v18.5A4.75 4.75 0 0 0 8.75 36h30.5A4.75 4.75 0 0 0 44 31.25v-18.5A4.75 4.75 0 0 0 39.25 8zM6.5 12.75a2.25 2.25 0 0 1 2.25-2.25h30.5a2.25 2.25 0 0 1 2.25 2.25v18.5a2.25 2.25 0 0 1-2.25 2.25H8.75a2.25 2.25 0 0 1-2.25-2.25zm4.75 26.75a1.25 1.25 0 1 0 0 2.5h25.5a1.25 1.25 0 1 0 0-2.5z");
}
</style><path class="gpzq2z1ua"/>`,
		"fallback": "fluent:tv-48-regular",
	});
}

export default Component;
