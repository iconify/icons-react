import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lefv39bck {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.5 41.5h-7.368L6.5 6.5h7.368l27.632 35zM21.941 26.059L6.5 41.5m35-35L26.059 21.941");
}
</style><path class="lefv39bck"/>`,
		"fallback": "arcticons:twitter-alt-2",
	});
}

export default Component;
