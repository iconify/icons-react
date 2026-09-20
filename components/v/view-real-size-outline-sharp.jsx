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
		"content": `<style>.yk1uh2y2z {
  fill: currentColor;
  d: path("M7 17V9H5V7h4v10zm4 0v-2h2v2zm5 0V9h-2V7h4v10zm-5-4v-2h2v2z");
}
</style><path class="yk1uh2y2z"/>`,
		"fallback": "material-symbols:view-real-size-outline-sharp",
	});
}

export default Component;
