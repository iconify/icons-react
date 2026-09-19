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
		"content": `<style>.g0s-pkxzy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.385 30.338l-8.46-10.002v19.981H5.5V7.847h8.293l15.286 18.084l5.095-5.861v20.282H42.5V7.648h-8.292l-8.193 9.991");
}

.gtg16xbdf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m25.981 13.276l.034 4.363h4.43");
}

.vliewzaaj {
  cx: 24.149px;
  cy: 32.104px;
  r: 1.607px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="g0s-pkxzy"/><path class="gtg16xbdf"/><circle class="vliewzaaj"/>`,
		"fallback": "arcticons:maprun",
	});
}

export default Component;
