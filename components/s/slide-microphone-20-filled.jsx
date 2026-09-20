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
		"content": `<style>.nv0x69xrl {
  fill: currentColor;
  d: path("M18.5 13.5a.5.5 0 0 1 .5.5a4 4 0 0 1-3.5 3.968v.532a.5.5 0 0 1-1 0v-.532A4 4 0 0 1 11 14a.5.5 0 0 1 1 0a3 3 0 1 0 6 0a.5.5 0 0 1 .5-.5m-3-9.5A2.5 2.5 0 0 1 18 6.5V12a3 3 0 1 0-6 0v.587A1.5 1.5 0 0 0 10 14c0 .711.148 1.387.416 2H4.5A2.5 2.5 0 0 1 2 13.5v-7A2.5 2.5 0 0 1 4.5 4zm-.5 6a2 2 0 0 1 2 2v2a2 2 0 1 1-4 0v-2a2 2 0 0 1 2-2m-9.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm0-2.5a.5.5 0 0 0 0 1H11a.5.5 0 0 0 0-1zm0-2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z");
}
</style><path class="nv0x69xrl"/>`,
		"fallback": "fluent:slide-microphone-20-filled",
	});
}

export default Component;
