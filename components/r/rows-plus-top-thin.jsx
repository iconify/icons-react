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
		"content": `<style>.d7dxn7b4t {
  fill: currentColor;
  d: path("M208 164H48a12 12 0 0 0-12 12v24a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12v-24a12 12 0 0 0-12-12m4 36a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-24a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-4-108H48a12 12 0 0 0-12 12v24a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12v-24a12 12 0 0 0-12-12m4 36a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-24a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4ZM100 40a4 4 0 0 1 4-4h20V16a4 4 0 0 1 8 0v20h20a4 4 0 0 1 0 8h-20v20a4 4 0 0 1-8 0V44h-20a4 4 0 0 1-4-4");
}
</style><path class="d7dxn7b4t"/>`,
		"fallback": "ph:rows-plus-top-thin",
	});
}

export default Component;
