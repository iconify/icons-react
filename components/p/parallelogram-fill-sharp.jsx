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
		"content": `<style>.yrvgrvu6p {
  fill: currentColor;
  d: path("M21 2a1.002 1.002 0 0 1 .976 1.217l-4 18A1 1 0 0 1 17 22H3a1.002 1.002 0 0 1-.976-1.217l4-18A1 1 0 0 1 7 2Z");
}
</style><path class="yrvgrvu6p"/>`,
		"fallback": "coolicons:parallelogram-fill-sharp",
	});
}

export default Component;
