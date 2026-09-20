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
		"content": `<style>.t0_f7fb_f {
  fill: currentColor;
  d: path("m211.45 52.51l-80-24A12 12 0 0 0 116 40v100.22A52 52 0 1 0 140 184v-79.87l64.55 19.36A12 12 0 0 0 220 112V64a12 12 0 0 0-8.55-11.49M88 212a28 28 0 1 1 28-28a28 28 0 0 1-28 28M196 95.87l-56-16.8V56.13l56 16.8Z");
}
</style><path class="t0_f7fb_f"/>`,
		"fallback": "ph:music-note-bold",
	});
}

export default Component;
