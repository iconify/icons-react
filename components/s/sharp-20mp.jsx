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
		"content": `<style>.k4n51fjcs {
  fill: currentColor;
  d: path("M15 14h1.5v1.5H15z");
}

.s31hdjcbz {
  fill: currentColor;
  d: path("M3 3v18h18V3zm3.5 5h3V7h-3V5.5H11V9H8v1h3v1.5H6.5zm6 10.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zm.5-13h4.5v6H13zM18 17h-3v1.5h-1.5v-6H18z");
}

.ymibcc01g {
  fill: currentColor;
  d: path("M14.5 7H16v3h-1.5z");
}
</style><path class="ymibcc01g"/><path class="s31hdjcbz"/><path class="k4n51fjcs"/>`,
		"fallback": "ic:sharp-20mp",
	});
}

export default Component;
