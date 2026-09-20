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
		"content": `<style>.ac0xocc7n {
  fill: currentColor;
  d: path("M3.78 3.22a.75.75 0 0 0-1.06 1.06l1.47 1.47l-1.47 1.47a.75.75 0 0 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06zM9.75 5a.75.75 0 0 0 0 1.5h11.5a.75.75 0 0 0 0-1.5zm-7 13a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5zM2 12.25a.75.75 0 0 1 .75-.75h18.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75");
}
</style><path class="ac0xocc7n"/>`,
		"fallback": "fluent:text-first-line-24-regular",
	});
}

export default Component;
