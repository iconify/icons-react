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
		"content": `<style>.x_g2tymgd {
  fill: currentColor;
  d: path("M15 23v1a1 1 0 0 1-1 1h-2v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2.586A2 2 0 0 1 4.586 22l7.738-7.739A8 8 0 1 1 20 20h-2v2a1 1 0 0 1-1 1zm7-11a2 2 0 1 0 0-4a2 2 0 0 0 0 4");
}
</style><path class="x_g2tymgd"/>`,
		"fallback": "fluent:key-32-filled",
	});
}

export default Component;
