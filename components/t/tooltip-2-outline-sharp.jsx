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
		"content": `<style>.w6r5wzbwb {
  fill: currentColor;
  d: path("M6 14h8v-2H6zm0-3h12V9H6zm0-3h12V6H6zm6 14l-2.675-4H2V2h20v16h-7.325zm0-3.6l1.6-2.4H20V4H4v12h6.4zm0-8.4");
}
</style><path class="w6r5wzbwb"/>`,
		"fallback": "material-symbols:tooltip-2-outline-sharp",
	});
}

export default Component;
