import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.p74pwhbni {
  fill: currentColor;
  d: path("M6.5 5A4.5 4.5 0 0 0 2 9.5v13A4.5 4.5 0 0 0 6.5 27h19a4.5 4.5 0 0 0 4.5-4.5v-13A4.5 4.5 0 0 0 25.5 5zM28 10.403l-12 6.461l-12-6.461V9.5A2.5 2.5 0 0 1 6.5 7h19A2.5 2.5 0 0 1 28 9.5zM4 12.674l11.526 6.207a1 1 0 0 0 .948 0L28 12.674V22.5a2.5 2.5 0 0 1-2.5 2.5h-19A2.5 2.5 0 0 1 4 22.5z");
}
</style><path class="p74pwhbni"/>`,
		"fallback": "fluent:mail-32-regular",
	});
}

export default Component;
