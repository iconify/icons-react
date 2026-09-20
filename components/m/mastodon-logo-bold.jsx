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
		"content": `<style>.r-q9h27dr {
  fill: currentColor;
  d: path("M184 28H72a44.05 44.05 0 0 0-44 44v120a44.05 44.05 0 0 0 44 44h88a12 12 0 0 0 0-24H72a20 20 0 0 1-20-20v-4h132a44.05 44.05 0 0 0 44-44V72a44.05 44.05 0 0 0-44-44m20 116a20 20 0 0 1-20 20H52V72a20 20 0 0 1 20-20h112a20 20 0 0 1 20 20Zm-16-40v32a12 12 0 0 1-24 0v-32a12 12 0 0 0-24 0v32a12 12 0 0 1-24 0v-32a12 12 0 0 0-24 0v32a12 12 0 0 1-24 0v-32a36 36 0 0 1 60-26.8a36 36 0 0 1 60 26.8");
}
</style><path class="r-q9h27dr"/>`,
		"fallback": "ph:mastodon-logo-bold",
	});
}

export default Component;
