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
		"content": `<style>.kjz6qmq_g {
  fill: currentColor;
  d: path("M14 6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1.002 1.002 0 0 1-.707-1.707l7-7A1 1 0 0 1 10 10h4Zm6 4V7h-4v3Z");
}
</style><path class="kjz6qmq_g"/>`,
		"fallback": "coolicons:iron-fill-sharp",
	});
}

export default Component;
