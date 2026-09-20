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
		"content": `<style>.jz6i71m7g {
  fill: currentColor;
  d: path("M7 3a2 2 0 0 0-2 2v3h6a3 3 0 0 1 3 3v1h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm10.5 11H14v-1h3.5a.5.5 0 0 1 0 1m-11 0a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zM2 11a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z");
}
</style><path class="jz6i71m7g"/>`,
		"fallback": "fluent:tablet-laptop-20-filled",
	});
}

export default Component;
