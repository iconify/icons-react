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
		"content": `<style>.tpvq6zt1l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 17.202h4.932v13.595H4.5zm14.195 0h4.932v13.595h-4.932zm10.01 0h4.932v13.595h-4.932zm14.795 0h-4.932L33.637 24l4.931 6.798H43.5L38.568 24zM18.695 30.798h-4.931L9.432 17.202h2.171c1.644 0 3.1 1.064 3.598 2.63z");
}

.xv9xeibjl {
  cx: 26.093px;
  cy: 19.668px;
  r: 2.466px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="tpvq6zt1l"/><circle class="xv9xeibjl"/>`,
		"fallback": "arcticons:nrk",
	});
}

export default Component;
