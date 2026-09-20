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
		"content": `<style>.m-jsezbix {
  fill: currentColor;
  d: path("M116 48v160a12 12 0 0 1-24 0v-68H53l11.52 11.51a12 12 0 0 1-17 17l-32-32a12 12 0 0 1 0-17l32-32a12 12 0 1 1 17 17L53 116h39V48a12 12 0 0 1 24 0m124.49 71.51l-32-32a12 12 0 0 0-17 17L203 116h-39V48a12 12 0 0 0-24 0v160a12 12 0 0 0 24 0v-68h39l-11.52 11.51a12 12 0 0 0 17 17l32-32a12 12 0 0 0 .01-17");
}
</style><path class="m-jsezbix"/>`,
		"fallback": "ph:split-horizontal-bold",
	});
}

export default Component;
