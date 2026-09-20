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
		"content": `<style>.wtgih872k {
  fill: currentColor;
  d: path("M4 20V4h2.954L12 17.339L17.015 4H20v16h-1.846V6.366L12.89 20h-1.8L5.846 6.46V20z");
}
</style><path class="wtgih872k"/>`,
		"fallback": "material-symbols-light:metro-outline",
	});
}

export default Component;
