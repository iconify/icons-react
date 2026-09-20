import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.q3d86q9xm {
  fill: currentColor;
  d: path("M14 2C7.373 2 2 7.373 2 14s5.373 12 12 12s12-5.373 12-12S20.627 2 14 2m0 19.5a7.5 7.5 0 1 1 0-15a7.5 7.5 0 0 1 0 15");
}
</style><path class="q3d86q9xm"/>`,
		"fallback": "fluent:record-28-filled",
	});
}

export default Component;
