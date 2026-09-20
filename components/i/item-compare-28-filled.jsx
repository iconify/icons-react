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
		"content": `<style>.z0qap-zqv {
  fill: currentColor;
  d: path("M14 3a.75.75 0 0 1 .75.75v20.5a.75.75 0 0 1-1.5 0V3.75A.75.75 0 0 1 14 3M8.25 9A2.75 2.75 0 0 1 11 11.75v4.5A2.75 2.75 0 0 1 8.25 19h-4.5A2.75 2.75 0 0 1 1 16.25v-4.5A2.75 2.75 0 0 1 3.75 9zm16 0A2.75 2.75 0 0 1 27 11.75v4.5A2.75 2.75 0 0 1 24.25 19h-4.5A2.75 2.75 0 0 1 17 16.25v-4.5A2.75 2.75 0 0 1 19.75 9z");
}
</style><path class="z0qap-zqv"/>`,
		"fallback": "fluent:item-compare-28-filled",
	});
}

export default Component;
