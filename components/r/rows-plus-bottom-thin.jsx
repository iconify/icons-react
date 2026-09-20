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
		"content": `<style>.dink835ro {
  fill: currentColor;
  d: path("M208 116H48a12 12 0 0 0-12 12v24a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12v-24a12 12 0 0 0-12-12m4 36a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-24a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-4-108H48a12 12 0 0 0-12 12v24a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 36a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-56 136a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0v-20h-20a4 4 0 0 1 0-8h20v-20a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4");
}
</style><path class="dink835ro"/>`,
		"fallback": "ph:rows-plus-bottom-thin",
	});
}

export default Component;
