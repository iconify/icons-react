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
		"content": `<style>.j_mjssbjx {
  fill: currentColor;
  d: path("M22 2H2v20l4-4h16zm-9 9h-2V5h2zm0 4h-2v-2h2z");
}
</style><path class="j_mjssbjx"/>`,
		"fallback": "ic:sharp-announcement",
	});
}

export default Component;
