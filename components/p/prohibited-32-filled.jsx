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
		"content": `<style>.bi-7yrb3o {
  fill: currentColor;
  d: path("M7.032 23.2A11.45 11.45 0 0 1 4.5 16C4.5 9.649 9.649 4.5 16 4.5c2.725 0 5.23.948 7.2 2.532zM8.8 24.968L24.968 8.8A11.45 11.45 0 0 1 27.5 16c0 6.351-5.149 11.5-11.5 11.5c-2.725 0-5.23-.948-7.2-2.532M2 16c0 7.732 6.268 14 14 14s14-6.268 14-14S23.732 2 16 2S2 8.268 2 16");
}
</style><path class="bi-7yrb3o"/>`,
		"fallback": "fluent:prohibited-32-filled",
	});
}

export default Component;
