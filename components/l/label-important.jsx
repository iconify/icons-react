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
		"content": `<style>.p8nwtgget {
  fill: currentColor;
  d: path("m3 19l5.5-7L3 4.98h11.673q.379 0 .718.156q.338.155.555.453L21 12l-5.034 6.392q-.218.299-.556.453t-.718.155z");
}
</style><path class="p8nwtgget"/>`,
		"fallback": "material-symbols-light:label-important",
	});
}

export default Component;
