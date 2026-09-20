import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yjz4_cxme {
  fill: currentColor;
  d: path("M9 4.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 9 4.5m0 5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 9 9.5m-6.25 4.25a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="yjz4_cxme"/>`,
		"fallback": "fluent:text-align-justify-low-20-filled",
	});
}

export default Component;
