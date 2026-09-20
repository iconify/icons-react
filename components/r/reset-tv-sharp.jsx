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
		"content": `<style>.lr50cz-on {
  fill: currentColor;
  d: path("M8 21v-2H2V3h20v7h-9.2l1.85-1.85l-1.4-1.4L9 11l4.25 4.25l1.4-1.4L12.8 12H22v7h-6v2z");
}
</style><path class="lr50cz-on"/>`,
		"fallback": "material-symbols:reset-tv-sharp",
	});
}

export default Component;
