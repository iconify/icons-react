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
		"content": `<style>.nwasod7bm {
  fill: currentColor;
  d: path("M9.875 21.125Q9 20.25 9 19t.875-2.125T12 16t2.125.875T15 19t-.875 2.125T12 22t-2.125-.875M11 14V5.825L8.4 8.4L7 7l5-5l5 5l-1.425 1.4L13 5.825V14z");
}
</style><path class="nwasod7bm"/>`,
		"fallback": "material-symbols:step-out",
	});
}

export default Component;
