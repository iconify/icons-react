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
		"content": `<style>.stz6wfwcf {
  fill: currentColor;
  d: path("M2 5.75A.75.75 0 0 1 2.75 5h22.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 5.75m0 16a.75.75 0 0 1 .75-.75h22.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75M2.75 13a.75.75 0 0 0 0 1.5h22.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="stz6wfwcf"/>`,
		"fallback": "fluent:navigation-28-regular",
	});
}

export default Component;
