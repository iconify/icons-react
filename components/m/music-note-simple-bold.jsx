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
		"content": `<style>.kat5udrsg {
  fill: currentColor;
  d: path("m211.45 52.51l-80-24A12 12 0 0 0 116 40v100.22A52 52 0 1 0 140 184V56.13l64.55 19.36a12 12 0 1 0 6.9-23ZM88 212a28 28 0 1 1 28-28a28 28 0 0 1-28 28");
}
</style><path class="kat5udrsg"/>`,
		"fallback": "ph:music-note-simple-bold",
	});
}

export default Component;
