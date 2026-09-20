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
		"content": `<style>.vqj_3wbud {
  fill: currentColor;
  d: path("M5 5.75A.75.75 0 0 1 5.75 5h15.5a.75.75 0 0 1 0 1.5H5.75A.75.75 0 0 1 5 5.75m5 13a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5h-10.5a.75.75 0 0 1-.75-.75M2.75 11.5a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="vqj_3wbud"/>`,
		"fallback": "fluent:text-align-right-24-regular",
	});
}

export default Component;
