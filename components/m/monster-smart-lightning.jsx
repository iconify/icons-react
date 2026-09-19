import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.zltxzccqi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 10.5C14.717 10.5 23 18.783 23 29v8.5H4.5zm39 0C33.283 10.5 25 18.783 25 29v8.5h18.5z");
}
</style><path class="zltxzccqi"/>`,
		"fallback": "arcticons:monster-smart-lightning",
	});
}

export default Component;
