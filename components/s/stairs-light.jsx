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
		"content": `<style>.yu320hbdh {
  fill: currentColor;
  d: path("M200 26H56a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14m-48 116h50v28h-92v-28Zm6-12v-28h44v28ZM56 38h144a2 2 0 0 1 2 2v50h-50a6 6 0 0 0-6 6v34h-42a6 6 0 0 0-6 6v34H54V40a2 2 0 0 1 2-2m144 180H56a2 2 0 0 1-2-2v-34h148v34a2 2 0 0 1-2 2");
}
</style><path class="yu320hbdh"/>`,
		"fallback": "ph:stairs-light",
	});
}

export default Component;
