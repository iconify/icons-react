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
		"content": `<style>.di7xielom {
  fill: currentColor;
  d: path("M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h5.772A6.5 6.5 0 0 1 21 12.022V6.25A3.25 3.25 0 0 0 17.75 3zM8 7.5a.5.5 0 0 0-.5.5v2.25a.75.75 0 0 1-1.5 0V8a2 2 0 0 1 2-2h2.25a.75.75 0 0 1 0 1.5zM7.5 16a.5.5 0 0 0 .5.5h2.25a.75.75 0 0 1 0 1.5H8a2 2 0 0 1-2-2v-2.25a.75.75 0 0 1 1.5 0zM16 7.5h-2.25a.75.75 0 0 1 0-1.5H16a2 2 0 0 1 2 2v2.25a.75.75 0 0 1-1.5 0V8a.5.5 0 0 0-.5-.5m1.5 6a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 9.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11m2.5-5.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0");
}
</style><path class="di7xielom"/>`,
		"fallback": "fluent:screenshot-record-24-filled",
	});
}

export default Component;
