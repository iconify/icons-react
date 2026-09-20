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
		"content": `<style>.wmbz_zbcr {
  fill: currentColor;
  d: path("M6 3a1 1 0 0 0-2 0v18a1 1 0 1 0 2 0zm14 0a1 1 0 1 0-2 0v18a1 1 0 1 0 2 0zm-7 0a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0zm-2 10.5a1 1 0 1 0 2 0v-3a1 1 0 1 0-2 0zm0 4.5a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0z");
}
</style><path class="wmbz_zbcr"/>`,
		"fallback": "fluent:road-24-filled",
	});
}

export default Component;
