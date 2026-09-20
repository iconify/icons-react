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
		"content": `<style>.isq-yrb8m {
  fill: currentColor;
  d: path("M12 6C6.477 6 2 10.477 2 16s4.477 10 10 10h8c5.523 0 10-4.477 10-10S25.523 6 20 6z");
}
</style><path class="isq-yrb8m"/>`,
		"fallback": "fluent:oval-32-filled",
	});
}

export default Component;
