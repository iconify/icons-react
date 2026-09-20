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
		"content": `<style>.lm9xd4b7j {
  fill: currentColor;
  d: path("M100 148a12 12 0 0 1-12 12H64a12 12 0 0 1 0-24h24a12 12 0 0 1 12 12m144-32v60a20 20 0 0 1-20 20h-84v28a12 12 0 0 1-24 0v-28H32a20 20 0 0 1-20-20v-60a64.07 64.07 0 0 1 64-64h80V24a12 12 0 0 1 12-12h32a12 12 0 0 1 0 24h-20v16a64.07 64.07 0 0 1 64 64m-128 56v-56a40 40 0 0 0-80 0v56Zm104-56a40 40 0 0 0-40-40v68a12 12 0 0 1-24 0V76h-30.07A63.7 63.7 0 0 1 140 116v56h80Z");
}
</style><path class="lm9xd4b7j"/>`,
		"fallback": "ph:mailbox-bold",
	});
}

export default Component;
