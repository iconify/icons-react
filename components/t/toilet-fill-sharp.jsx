import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wvq9dhd5w {
  fill: currentColor;
  d: path("M3 10V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v7Zm17.93 2A7.02 7.02 0 0 1 15 17.93V21a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-3.082A6.01 6.01 0 0 1 3 12Z");
}
</style><path class="wvq9dhd5w"/>`,
		"fallback": "coolicons:toilet-fill-sharp",
	});
}

export default Component;
