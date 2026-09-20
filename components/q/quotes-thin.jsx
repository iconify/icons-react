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
		"content": `<style>.nuv67xfwy {
  fill: currentColor;
  d: path("M100 60H40a12 12 0 0 0-12 12v64a12 12 0 0 0 12 12h64v12a36 36 0 0 1-36 36a4 4 0 0 0 0 8a44.05 44.05 0 0 0 44-44V72a12 12 0 0 0-12-12m4 80H40a4 4 0 0 1-4-4V72a4 4 0 0 1 4-4h60a4 4 0 0 1 4 4Zm112-80h-60a12 12 0 0 0-12 12v64a12 12 0 0 0 12 12h64v12a36 36 0 0 1-36 36a4 4 0 0 0 0 8a44.05 44.05 0 0 0 44-44V72a12 12 0 0 0-12-12m4 80h-64a4 4 0 0 1-4-4V72a4 4 0 0 1 4-4h60a4 4 0 0 1 4 4Z");
}
</style><path class="nuv67xfwy"/>`,
		"fallback": "ph:quotes-thin",
	});
}

export default Component;
