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
		"content": `<style>.tglchzbdy {
  fill: currentColor;
  d: path("M184 32H72a40 40 0 0 0-40 40v120a40 40 0 0 0 40 40h88a8 8 0 0 0 0-16H72a24 24 0 0 1-24-24v-8h136a40 40 0 0 0 40-40V72a40 40 0 0 0-40-40m0 104a8 8 0 0 1-16 0v-32a16 16 0 0 0-32 0v32a8 8 0 0 1-16 0v-32a16 16 0 0 0-32 0v32a8 8 0 0 1-16 0v-32a32 32 0 0 1 56-21.13A32 32 0 0 1 184 104Z");
}
</style><path class="tglchzbdy"/>`,
		"fallback": "ph:mastodon-logo-fill",
	});
}

export default Component;
