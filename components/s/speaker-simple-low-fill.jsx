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
		"content": `<style>.pn11hdbyj {
  fill: currentColor;
  d: path("M168 32v192a8 8 0 0 1-12.91 6.31L85.25 176H40a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h45.25l69.84-54.31A8 8 0 0 1 168 32m32 64a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8");
}
</style><path class="pn11hdbyj"/>`,
		"fallback": "ph:speaker-simple-low-fill",
	});
}

export default Component;
