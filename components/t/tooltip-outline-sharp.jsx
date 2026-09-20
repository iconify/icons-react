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
		"content": `<style>.on_yvhu4x {
  fill: currentColor;
  d: path("m12 22l-2.675-4H2V2h20v16h-7.325zm0-3.6l1.6-2.4H20V4H4v12h6.4zm0-8.4");
}
</style><path class="on_yvhu4x"/>`,
		"fallback": "material-symbols:tooltip-outline-sharp",
	});
}

export default Component;
