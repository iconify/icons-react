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
		"content": `<style>.pa1_gtpql {
  fill: currentColor;
  d: path("m21.05 17.56l-17.97.94L3 17l17.98-.94zM21 19.48H3v1.5h18zM22 3v11H2V3zm-2 3c-1.68 0-3.04.98-3.21 2.23c-.64-.73-2.73-2.73-6.54-2.73c-4.67 0-6.75 3-6.75 3s2.08 3 6.75 3c3.81 0 5.9-2 6.54-2.73C16.96 10.02 18.32 11 20 11z");
}
</style><path class="pa1_gtpql"/>`,
		"fallback": "ic:sharp-set-meal",
	});
}

export default Component;
