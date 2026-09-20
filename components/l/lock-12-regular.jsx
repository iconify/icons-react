import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ittqilbmb {
  fill: currentColor;
  d: path("M6 0a2.5 2.5 0 0 1 2.5 2.5v1.565A2 2 0 0 1 10 6v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 1.5-1.935V2.5A2.5 2.5 0 0 1 6 0M4 5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm2 1.75a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5M6 1a1.5 1.5 0 0 0-1.5 1.5V4h3V2.5A1.5 1.5 0 0 0 6 1");
}
</style><path class="ittqilbmb"/>`,
		"fallback": "fluent:lock-12-regular",
	});
}

export default Component;
