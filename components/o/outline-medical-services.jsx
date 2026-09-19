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
		"content": `<style>.ic-f6qblm {
  fill: currentColor;
  d: path("M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2M10 4h4v2h-4zm10 16H4V8h16z");
}

.ox5bagm_m {
  fill: currentColor;
  d: path("M13 10h-2v3H8v2h3v3h2v-3h3v-2h-3z");
}
</style><path class="ic-f6qblm"/><path class="ox5bagm_m"/>`,
		"fallback": "ic:outline-medical-services",
	});
}

export default Component;
