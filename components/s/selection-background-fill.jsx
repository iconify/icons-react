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
		"content": `<style>.xhacgihmw {
  fill: currentColor;
  d: path("M72 112h72v72H72Zm152-64v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16M96 72a8 8 0 0 0 16 0h16a8 8 0 0 0 0-16h-16a16 16 0 0 0-16 16m64 40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v72a16 16 0 0 0 16 16h72a16 16 0 0 0 16-16Zm40 16a8 8 0 0 0-16 0v16a8 8 0 0 0 0 16a16 16 0 0 0 16-16Zm0-56a16 16 0 0 0-16-16h-16a8 8 0 0 0 0 16h16v16a8 8 0 0 0 16 0Z");
}
</style><path class="xhacgihmw"/>`,
		"fallback": "ph:selection-background-fill",
	});
}

export default Component;
