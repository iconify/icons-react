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
		"content": `<style>.kh_0c9b6g {
  fill: currentColor;
  d: path("M7 17v-2h2v2zm9 0v-2h4v-2h-4V7h6v2h-4v2h4v6zM4 17V9H2V7h4v10zm7 0l2-8H9V7h6v2.05L13 17z");
}
</style><path class="kh_0c9b6g"/>`,
		"fallback": "material-symbols:speed-1-75-outline-sharp",
	});
}

export default Component;
