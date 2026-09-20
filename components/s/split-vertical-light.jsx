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
		"content": `<style>.v85jmnbxu {
  fill: currentColor;
  d: path("M214 152a6 6 0 0 1-6 6h-74v59.51l21.76-21.75a6 6 0 0 1 8.48 8.48l-32 32a6 6 0 0 1-8.48 0l-32-32a6 6 0 0 1 8.48-8.48L122 217.51V158H48a6 6 0 0 1 0-12h160a6 6 0 0 1 6 6M48 110h160a6 6 0 0 0 0-12h-74V38.49l21.76 21.75a6 6 0 0 0 8.48-8.48l-32-32a6 6 0 0 0-8.48 0l-32 32a6 6 0 0 0 8.48 8.48L122 38.49V98H48a6 6 0 0 0 0 12");
}
</style><path class="v85jmnbxu"/>`,
		"fallback": "ph:split-vertical-light",
	});
}

export default Component;
