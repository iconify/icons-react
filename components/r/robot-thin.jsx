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
		"content": `<style>.umxljlb9v {
  fill: currentColor;
  d: path("M200 52h-68V16a4 4 0 0 0-8 0v36H56a28 28 0 0 0-28 28v112a28 28 0 0 0 28 28h144a28 28 0 0 0 28-28V80a28 28 0 0 0-28-28m20 140a20 20 0 0 1-20 20H56a20 20 0 0 1-20-20V80a20 20 0 0 1 20-20h144a20 20 0 0 1 20 20ZM76 108a8 8 0 1 1 8 8a8 8 0 0 1-8-8m88 0a8 8 0 1 1 8 8a8 8 0 0 1-8-8m0 32H92a24 24 0 0 0 0 48h72a24 24 0 0 0 0-48m-20 8v32h-32v-32Zm-68 16a16 16 0 0 1 16-16h12v32H92a16 16 0 0 1-16-16m88 16h-12v-32h12a16 16 0 0 1 0 32");
}
</style><path class="umxljlb9v"/>`,
		"fallback": "ph:robot-thin",
	});
}

export default Component;
