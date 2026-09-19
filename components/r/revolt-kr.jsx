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
		"content": `<style>.dl6s87rrz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 24H12.735L26.287 4.5h11.266zm-2.287 19.5H10.447L24 24h11.265z");
}
</style><path class="dl6s87rrz"/>`,
		"fallback": "arcticons:revolt-kr",
	});
}

export default Component;
