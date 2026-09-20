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
		"content": `<style>.e3f-eyb6q {
  fill: currentColor;
  d: path("M216 90h-66V40a14 14 0 0 0-14-14H72a14 14 0 0 0-14 14v48a14 14 0 0 0 14 14h66v52H72a14 14 0 0 0-14 14v48a14 14 0 0 0 14 14h64a14 14 0 0 0 14-14v-50h66a14 14 0 0 0 14-14v-48a14 14 0 0 0-14-14m-78 126a2 2 0 0 1-2 2H72a2 2 0 0 1-2-2v-48a2 2 0 0 1 2-2h66Zm0-126H72a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h64a2 2 0 0 1 2 2Zm80 62a2 2 0 0 1-2 2h-66v-52h66a2 2 0 0 1 2 2Z");
}
</style><path class="e3f-eyb6q"/>`,
		"fallback": "ph:replit-logo-light",
	});
}

export default Component;
