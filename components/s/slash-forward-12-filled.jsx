import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.m9bovp1uu {
  fill: currentColor;
  d: path("M7.464 1.03a.75.75 0 0 1 .507.932l-2.501 8.5a.75.75 0 0 1-1.44-.424l2.503-8.5a.75.75 0 0 1 .93-.507");
}
</style><path class="m9bovp1uu"/>`,
		"fallback": "fluent:slash-forward-12-filled",
	});
}

export default Component;
