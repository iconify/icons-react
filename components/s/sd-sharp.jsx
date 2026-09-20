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
		"content": `<style>.tsq9vhyqj {
  fill: currentColor;
  d: path("M2 20V4h20v16zm4-5h5v-3.5H7.5v-1h2v.5H11V9H6v3.5h3.5v1h-2V13H6zm7 0h4.25l.75-.75v-4.5L17.25 9H13zm1.5-1.5v-3h2v3z");
}
</style><path class="tsq9vhyqj"/>`,
		"fallback": "material-symbols:sd-sharp",
	});
}

export default Component;
