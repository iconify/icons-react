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
		"content": `<style>.b3d1n3q2w {
  fill: currentColor;
  d: path("M2.75 7a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zm7.5 0a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zm7.5 0a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zm-15 8a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="b3d1n3q2w"/>`,
		"fallback": "fluent:line-horizontal-2-dashes-solid-24-regular",
	});
}

export default Component;
