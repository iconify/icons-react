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
		"content": `<style>.xttaf1b9n {
  fill: currentColor;
  d: path("M6.5 17V3h14v14zm1-1h12V7.039h-6.23V4H7.5zm-4 4V6.616h1V19h12.385v1zm4-16v12z");
}
</style><path class="xttaf1b9n"/>`,
		"fallback": "material-symbols-light:tab-group-outline-sharp",
	});
}

export default Component;
