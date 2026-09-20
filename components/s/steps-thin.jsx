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
		"content": `<style>.hjgamtb0n {
  fill: currentColor;
  d: path("M244 56a4 4 0 0 1-4 4h-52v44a4 4 0 0 1-4 4h-52v44a4 4 0 0 1-4 4H76v44a4 4 0 0 1-4 4H16a4 4 0 0 1 0-8h52v-44a4 4 0 0 1 4-4h52v-44a4 4 0 0 1 4-4h52V56a4 4 0 0 1 4-4h56a4 4 0 0 1 4 4");
}
</style><path class="hjgamtb0n"/>`,
		"fallback": "ph:steps-thin",
	});
}

export default Component;
