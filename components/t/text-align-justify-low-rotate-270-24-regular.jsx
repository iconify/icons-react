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
		"content": `<style>.iv1qrt1bo {
  fill: currentColor;
  d: path("M5.75 11a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5a.75.75 0 0 1-.75.75m13 11a.75.75 0 0 1-.75-.75V2.75a.75.75 0 0 1 1.5 0v18.5a.75.75 0 0 1-.75.75M11.5 10.25a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-1.5 0z");
}
</style><path class="iv1qrt1bo"/>`,
		"fallback": "fluent:text-align-justify-low-rotate-270-24-regular",
	});
}

export default Component;
