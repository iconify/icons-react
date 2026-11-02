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
		"content": `<style>.tuu6lyu_p {
  fill: currentColor;
  d: path("M13 13.918V16h2a1 1 0 0 1 0 2h-2v3a1 1 0 0 1-2 0v-3H9a1 1 0 0 1 0-2h2v-2.082a6.001 6.001 0 1 1 2 0");
}
</style><path class="tuu6lyu_p"/>`,
		"fallback": "coolicons:venus-fill-sharp",
	});
}

export default Component;
