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
		"content": `<style>.sgya8yblv {
  fill: currentColor;
  d: path("M7 17v-2h2v2zm3 0v-2h4v-2h-4V7h6v2h-4v2h4v6z");
}
</style><path class="sgya8yblv"/>`,
		"fallback": "material-symbols:speed-0-5-sharp",
	});
}

export default Component;
