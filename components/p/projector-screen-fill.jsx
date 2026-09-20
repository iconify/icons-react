import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.nslfv9bfw {
  fill: currentColor;
  d: path("M232 64V48a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16v96h-8a8 8 0 0 0 0 16h88v17.38a24 24 0 1 0 16 0V192h88a8 8 0 0 0 0-16h-8V80a16 16 0 0 0 16-16M128 240a8 8 0 1 1 8-8a8 8 0 0 1-8 8M40 48h176v16H40Z");
}
</style><path class="nslfv9bfw"/>`,
		"fallback": "ph:projector-screen-fill",
	});
}

export default Component;
