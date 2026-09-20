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
		"content": `<style>.b7xop0bee {
  fill: currentColor;
  d: path("m6 20l-4-4l1.4-1.4L5 16.15V5h2v11.15l1.6-1.55L10 16zm6-1v-2h10v2zm0-6v-2h10v2zm0-6V5h10v2z");
}
</style><path class="b7xop0bee"/>`,
		"fallback": "material-symbols:list-arrow-outline-sharp",
	});
}

export default Component;
