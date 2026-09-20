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
		"content": `<style>.gp4kk0b2x {
  fill: currentColor;
  d: path("m236.24 140.24l-32 32a6 6 0 0 1-8.48-8.48L217.51 142h-95l-60 60H96a6 6 0 0 1 0 12H48a6 6 0 0 1-6-6v-48a6 6 0 0 1 12 0v33.51l60-60v-95L92.24 60.24a6 6 0 0 1-8.48-8.48l32-32a6 6 0 0 1 8.48 0l32 32a6 6 0 1 1-8.48 8.48L126 38.49V130h91.51l-21.75-21.76a6 6 0 0 1 8.48-8.48l32 32a6 6 0 0 1 0 8.48");
}
</style><path class="gp4kk0b2x"/>`,
		"fallback": "ph:vector-three-light",
	});
}

export default Component;
