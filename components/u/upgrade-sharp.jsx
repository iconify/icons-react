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
		"content": `<style>.uo2zm2b2t {
  fill: currentColor;
  d: path("M7 20v-2h10v2zm4-4V7.825L8.4 10.4L7 9l5-5l5 5l-1.4 1.4L13 7.825V16z");
}
</style><path class="uo2zm2b2t"/>`,
		"fallback": "material-symbols:upgrade-sharp",
	});
}

export default Component;
