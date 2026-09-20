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
		"content": `<style>.bshkkac9y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.923 18.73v11.478m12.355 0V23.06a4.33 4.33 0 0 0-4.33-4.331a4.33 4.33 0 0 0-4.332 4.331v7.147");
}

.cyf4ocbij {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M45.5 24A21.5 21.5 0 1 1 24 2.5A21.5 21.5 0 0 1 45.5 24M16.903 3.699v40.602M12.38 5.907v36.186");
}

.labqe46de {
  cx: 24.923px;
  cy: 15.71px;
  r: 0.75px;
  fill: currentColor;
}
</style><path class="cyf4ocbij"/><circle class="labqe46de"/><path class="bshkkac9y"/>`,
		"fallback": "arcticons:swindon-bus",
	});
}

export default Component;
