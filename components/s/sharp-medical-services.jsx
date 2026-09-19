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
		"content": `<style>.x9vp2pb8n {
  fill: currentColor;
  d: path("M16 6V2H8v4H2v16h20V6zm-6-2h4v2h-4zm6 11h-3v3h-2v-3H8v-2h3v-3h2v3h3z");
}
</style><path class="x9vp2pb8n"/>`,
		"fallback": "ic:sharp-medical-services",
	});
}

export default Component;
