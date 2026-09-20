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
		"content": `<style>.k2csj1dzo {
  fill: currentColor;
  d: path("M5 2a2 2 0 0 0-2 2v7.57a5.8 5.8 0 0 1 6.466.998C10.355 13.394 11 14.515 11 15.5c0 .517-.181 1.049-.434 1.519a5.3 5.3 0 0 1-.687.981H13a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 3.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zM16 6h.5a.5.5 0 0 1 .5.5V8a.5.5 0 0 1-.5.5H16zm0 3.5h.5a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H16zm0 3.5h.5a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-.5.5H16zM1 15.5C1 14.318 2.736 12 5.5 12c2.761 0 4.5 2.3 4.5 3.5c0 1.182-1.739 3.5-4.5 3.5S1 16.7 1 15.5m3.111 2.079A2.5 2.5 0 1 0 6.89 13.42a2.5 2.5 0 0 0-2.78 4.16m2.636-1.246a1.5 1.5 0 1 0-2.494-1.666a1.5 1.5 0 0 0 2.494 1.666");
}
</style><path class="k2csj1dzo"/>`,
		"fallback": "fluent:notebook-eye-20-filled",
	});
}

export default Component;
