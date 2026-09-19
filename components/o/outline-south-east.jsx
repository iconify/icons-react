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
		"content": `<style>.i1t-4526n {
  fill: currentColor;
  d: path("M19 9h-2v6.59L5.41 4L4 5.41L15.59 17H9v2h10z");
}
</style><path class="i1t-4526n"/>`,
		"fallback": "ic:outline-south-east",
	});
}

export default Component;
