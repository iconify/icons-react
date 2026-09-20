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
		"content": `<style>.up0cnugah {
  fill: currentColor;
  d: path("M7 9h2V7H7zm0 4h2v-2H7zm0 4h2v-2H7zm-4 4V3h13l5 5v13zm2-2h14V9h-4V5H5zM5 5v4zv14z");
}
</style><path class="up0cnugah"/>`,
		"fallback": "material-symbols:summarize-outline-sharp",
	});
}

export default Component;
