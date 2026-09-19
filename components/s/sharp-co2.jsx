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
		"content": `<style>.jik-xgjif {
  fill: currentColor;
  d: path("M15 9h-5v6h5zm-1.5 4.5h-2v-3h2zM8 13v2H3V9h5v2H6.5v-.5h-2v3h2V13zm10.5 2.5v1h3V18H17v-3.5h3v-1h-3V12h4.5v3.5z");
}
</style><path class="jik-xgjif"/>`,
		"fallback": "ic:sharp-co2",
	});
}

export default Component;
