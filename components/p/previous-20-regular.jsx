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
		"content": `<style>.t9sdlobfb {
  fill: currentColor;
  d: path("M3 3.5a.5.5 0 0 1 1 0v13a.5.5 0 0 1-1 0zm14 .752c0-1-1.117-1.595-1.947-1.038l-8.5 5.707a1.25 1.25 0 0 0-.006 2.071l8.499 5.793A1.25 1.25 0 0 0 17 15.752zm-1.39-.207a.25.25 0 0 1 .39.207v11.5c0 .2-.225.32-.391.207l-8.5-5.793a.25.25 0 0 1 .002-.414z");
}
</style><path class="t9sdlobfb"/>`,
		"fallback": "fluent:previous-20-regular",
	});
}

export default Component;
