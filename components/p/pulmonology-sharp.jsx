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
		"content": `<style>.u7vaktb9x {
  fill: currentColor;
  d: path("M11 2h2v7.6l3 3l1.05-1.05L14.525 9V5H18.7l3.3 8.825V21h-9v-5l.4-3.2l-1.4-1.4l-1.4 1.4l.4 3.2v5H2v-7.175L5.3 5h4.2v4l-2.55 2.55L8 12.6l3-3z");
}
</style><path class="u7vaktb9x"/>`,
		"fallback": "material-symbols:pulmonology-sharp",
	});
}

export default Component;
