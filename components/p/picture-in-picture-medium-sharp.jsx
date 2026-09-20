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
		"content": `<style>.fzf58kbwi {
  fill: currentColor;
  d: path("M8 16V8h10v8zm-6 4v-2h18V4h2v16z");
}
</style><path class="fzf58kbwi"/>`,
		"fallback": "material-symbols:picture-in-picture-medium-sharp",
	});
}

export default Component;
