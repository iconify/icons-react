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
		"content": `<style>.ug8w1fywr {
  fill: currentColor;
  d: path("M5.25 4A3.25 3.25 0 0 0 2 7.25v9.5A3.25 3.25 0 0 0 5.25 20h13.5A3.25 3.25 0 0 0 22 16.75v-9.5A3.25 3.25 0 0 0 18.75 4zM3.5 7.25c0-.966.784-1.75 1.75-1.75H8v5H3.5zm0 4.75h17v4.75a1.75 1.75 0 0 1-1.75 1.75H5.25a1.75 1.75 0 0 1-1.75-1.75zm17-1.5H16v-5h2.75c.966 0 1.75.784 1.75 1.75zm-6-5v5h-5v-5z");
}
</style><path class="ug8w1fywr"/>`,
		"fallback": "fluent:panel-top-gallery-24-regular",
	});
}

export default Component;
