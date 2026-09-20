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
		"content": `<style>.uesuzzq2f {
  fill: currentColor;
  d: path("M216 92h-68V40a12 12 0 0 0-12-12H72a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h68v56H72a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h64a12 12 0 0 0 12-12v-52h68a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12m-76 124a4 4 0 0 1-4 4H72a4 4 0 0 1-4-4v-48a4 4 0 0 1 4-4h68Zm0-124H72a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h64a4 4 0 0 1 4 4Zm80 60a4 4 0 0 1-4 4h-68v-56h68a4 4 0 0 1 4 4Z");
}
</style><path class="uesuzzq2f"/>`,
		"fallback": "ph:replit-logo-thin",
	});
}

export default Component;
