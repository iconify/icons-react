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
		"content": `<style>.plu2m8bnw {
  fill: currentColor;
  d: path("M208 162H48a14 14 0 0 0-14 14v24a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14v-24a14 14 0 0 0-14-14m2 38a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-24a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-2-110H48a14 14 0 0 0-14 14v24a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14v-24a14 14 0 0 0-14-14m2 38a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-24a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2ZM98 40a6 6 0 0 1 6-6h18V16a6 6 0 0 1 12 0v18h18a6 6 0 0 1 0 12h-18v18a6 6 0 0 1-12 0V46h-18a6 6 0 0 1-6-6");
}
</style><path class="plu2m8bnw"/>`,
		"fallback": "ph:rows-plus-top-light",
	});
}

export default Component;
