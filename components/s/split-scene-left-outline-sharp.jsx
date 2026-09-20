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
		"content": `<style>.x9igppb4g {
  fill: currentColor;
  d: path("M14.885 19v-1H19V6h-4.115V5H20v14zM11.5 21v-2H4V5h7.5V3h1v18zM19 6v12z");
}
</style><path class="x9igppb4g"/>`,
		"fallback": "material-symbols-light:split-scene-left-outline-sharp",
	});
}

export default Component;
