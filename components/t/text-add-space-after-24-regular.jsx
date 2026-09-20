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
		"content": `<style>.r7nxwacto {
  fill: currentColor;
  d: path("M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75m0 6a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75m6.47 5.47a.75.75 0 1 0 1.06 1.06L12 17.81l1.47 1.47a.75.75 0 1 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0z");
}
</style><path class="r7nxwacto"/>`,
		"fallback": "fluent:text-add-space-after-24-regular",
	});
}

export default Component;
