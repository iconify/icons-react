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
		"content": `<style>.rfavfbb2f {
  fill: currentColor;
  d: path("M18 9.5V5H2v14h16v-4.5l4 4v-13zm-5 6V13H7v2.5L3.5 12L7 8.5V11h6V8.5l3.5 3.5z");
}
</style><path class="rfavfbb2f"/>`,
		"fallback": "ic:sharp-switch-video",
	});
}

export default Component;
