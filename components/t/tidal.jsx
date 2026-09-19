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
		"content": `<style>.h6_wom11w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m10.333 12.333l6.834 6.834L24 12.333l6.833 6.834l6.834-6.834l6.833 6.834L37.667 26l-6.834-6.833L24 26l6.833 6.833L24 39.667l-6.833-6.834L24 26l-6.833-6.833L10.333 26L3.5 19.167Z");
}
</style><path class="h6_wom11w"/>`,
		"fallback": "arcticons:tidal",
	});
}

export default Component;
