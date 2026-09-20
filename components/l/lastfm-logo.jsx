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
		"content": `<style>.g-3-nkuoh {
  fill: currentColor;
  d: path("M248 160a40 40 0 0 1-40 40h-17.43a56.22 56.22 0 0 1-50.75-32.32l-30.14-64.6A40.15 40.15 0 0 0 73.43 80H64a40 40 0 0 0-40 40v24a40 40 0 0 0 40 40h8a32 32 0 0 0 29.34-19.2a8 8 0 1 1 14.66 6.4A48 48 0 0 1 72 200h-8a56.06 56.06 0 0 1-56-56v-24a56.06 56.06 0 0 1 56-56h9.43a56.22 56.22 0 0 1 50.75 32.32l30.14 64.6A40.15 40.15 0 0 0 190.57 184H208a24 24 0 0 0 0-48h-20a36 36 0 0 1 0-72h20a32 32 0 0 1 32 32a8 8 0 0 1-16 0a16 16 0 0 0-16-16h-20a20 20 0 0 0 0 40h20a40 40 0 0 1 40 40");
}
</style><path class="g-3-nkuoh"/>`,
		"fallback": "ph:lastfm-logo",
	});
}

export default Component;
