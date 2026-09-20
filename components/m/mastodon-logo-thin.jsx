import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.j_xvtobkj {
  fill: currentColor;
  d: path("M184 36H72a36 36 0 0 0-36 36v120a36 36 0 0 0 36 36h88a4 4 0 0 0 0-8H72a28 28 0 0 1-28-28v-12h140a36 36 0 0 0 36-36V72a36 36 0 0 0-36-36m28 108a28 28 0 0 1-28 28H44V72a28 28 0 0 1 28-28h112a28 28 0 0 1 28 28Zm-32-40v32a4 4 0 0 1-8 0v-32a20 20 0 0 0-40 0v32a4 4 0 0 1-8 0v-32a20 20 0 0 0-40 0v32a4 4 0 0 1-8 0v-32a28 28 0 0 1 52-14.41A28 28 0 0 1 180 104");
}
</style><path class="j_xvtobkj"/>`,
		"fallback": "ph:mastodon-logo-thin",
	});
}

export default Component;
