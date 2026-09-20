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
		"content": `<style>.i9k9qabwk {
  fill: currentColor;
  d: path("M1 21V3h14v18h-5v-5H6v5zm4-8h2v-2H5zm0-4h2V7H5zm4 4h2v-2H9zm0-4h2V7H9zm10.5 6.5l-1.4-1.4l1.075-1.1H16v-2h3.175L18.1 9.9l1.4-1.4L23 12z");
}
</style><path class="i9k9qabwk"/>`,
		"fallback": "material-symbols:outpatient",
	});
}

export default Component;
