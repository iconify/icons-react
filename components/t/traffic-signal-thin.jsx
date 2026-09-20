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
		"content": `<style>.onuvp4b5s {
  fill: currentColor;
  d: path("M128 60a28 28 0 1 0 28 28a28 28 0 0 0-28-28m0 48a20 20 0 1 1 20-20a20 20 0 0 1-20 20m0 32a28 28 0 1 0 28 28a28 28 0 0 0-28-28m0 48a20 20 0 1 1 20-20a20 20 0 0 1-20 20m88-40h-20V76h20a4 4 0 0 0 0-8h-20V40a12 12 0 0 0-12-12H72a12 12 0 0 0-12 12v28H40a4 4 0 0 0 0 8h20v72H40a4 4 0 0 0 0 8h20v60a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12v-60h20a4 4 0 0 0 0-8m-28 68a4 4 0 0 1-4 4H72a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h112a4 4 0 0 1 4 4Z");
}
</style><path class="onuvp4b5s"/>`,
		"fallback": "ph:traffic-signal-thin",
	});
}

export default Component;
