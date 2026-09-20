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
		"content": `<style>.bjemujb8r {
  fill: currentColor;
  d: path("M7 22V6.975h15V17l-5 5zm13-6h-4v4zM4.3 19.075L1.675 4.3L16.45 1.675L17.05 5H5v13.95z");
}
</style><path class="bjemujb8r"/>`,
		"fallback": "material-symbols:note-stack-sharp",
	});
}

export default Component;
