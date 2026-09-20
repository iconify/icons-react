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
		"content": `<style>.na7khfbtm {
  fill: currentColor;
  d: path("M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m46.12-95.39l-64-40A4 4 0 0 0 104 88v80a4 4 0 0 0 2.06 3.5a4.06 4.06 0 0 0 1.94.5a4 4 0 0 0 2.12-.61l64-40a4 4 0 0 0 0-6.78M112 160.78V95.22L164.45 128Z");
}
</style><path class="na7khfbtm"/>`,
		"fallback": "ph:play-circle-thin",
	});
}

export default Component;
