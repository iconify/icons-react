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
		"content": `<style>.ru-icjl7e {
  fill: currentColor;
  d: path("M13 5.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75m-11 13a.75.75 0 0 1 .75-.75h18.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75m11.75-7.25a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="ru-icjl7e"/>`,
		"fallback": "fluent:text-align-justify-low-24-regular",
	});
}

export default Component;
