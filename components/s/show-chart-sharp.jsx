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
		"content": `<style>.z27n62b6e {
  fill: currentColor;
  d: path("M3.5 18.5L2 17l7.5-7.5l4 4l7.1-8L22 6.9l-8.5 9.6l-4-4z");
}
</style><path class="z27n62b6e"/>`,
		"fallback": "material-symbols:show-chart-sharp",
	});
}

export default Component;
