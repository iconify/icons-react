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
		"content": `<style>.ida42ny2f {
  fill: currentColor;
  d: path("M4 20h16v2H4zM4 2h16v2H4zm5.41 11.59L8 15l4 4l4-4l-1.41-1.41L13 15.17V8.83l1.59 1.58L16 9l-4-4l-4 4l1.41 1.41L11 8.83v6.34z");
}
</style><path class="ida42ny2f"/>`,
		"fallback": "ic:outline-expand",
	});
}

export default Component;
