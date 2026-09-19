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
		"content": `<style>.chj0y-b2g {
  cx: 23.999px;
  cy: 24px;
  r: 15.991px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.qkt2_lgop {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5v5.508m-14.944.534l3.894 3.895m26.538-3.345l-3.896 3.894");
}

.rq6nv4b7r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 8.008V24m15.993 0H8.008M2.5 24h5.508m31.977 0H45.5M12.958 35.568l-3.895 3.895m26.398-4.319l3.9 3.899m-15.362.949V45.5");
}
</style><circle class="cpk0fnbgt"/><path class="qkt2_lgop"/><circle class="chj0y-b2g"/><path class="rq6nv4b7r"/>`,
		"fallback": "arcticons:naturalhour",
	});
}

export default Component;
