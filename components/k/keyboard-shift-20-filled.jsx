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
		"content": `<style>.k2cp3raze {
  fill: currentColor;
  d: path("M11.139 2.528a1.492 1.492 0 0 0-2.278 0l-6.62 7.803c-.553.651-.093 1.654.759 1.654h3.01v5.012A1 1 0 0 0 7.006 18h5.986a1 1 0 0 0 .998-1.003v-5.012H17c.85 0 1.31-1.003.759-1.654z");
}
</style><path class="k2cp3raze"/>`,
		"fallback": "fluent:keyboard-shift-20-filled",
	});
}

export default Component;
