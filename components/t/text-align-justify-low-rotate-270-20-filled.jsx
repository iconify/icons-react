import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.a7v3nrbeq {
  fill: currentColor;
  d: path("M4.5 11a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5a.75.75 0 0 1-.75.75m5 0a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5a.75.75 0 0 1-.75.75m4.25 6.25a.75.75 0 0 0 1.5 0V2.75a.75.75 0 0 0-1.5 0z");
}
</style><path class="a7v3nrbeq"/>`,
		"fallback": "fluent:text-align-justify-low-rotate-270-20-filled",
	});
}

export default Component;
