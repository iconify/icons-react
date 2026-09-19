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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.oxa177b2o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 39.332c-8.455 0-15.332-6.878-15.332-15.332S15.545 8.668 24 8.668S39.333 15.546 39.333 24a2.562 2.562 0 1 1-5.125 0c0-5.629-4.58-10.208-10.209-10.208S13.792 18.372 13.792 24s4.579 10.208 10.207 10.208a2.562 2.562 0 1 1 0 5.124");
}

.rz9i_8icv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.72 37.282c-.655 0-1.31-.25-1.81-.75l-5.949-5.948a2.561 2.561 0 1 1 3.623-3.623l5.948 5.948a2.561 2.561 0 0 1-1.811 4.373");
}
</style><circle class="cpk0fnbgt"/><path class="oxa177b2o"/><path class="rz9i_8icv"/>`,
		"fallback": "arcticons:qdance",
	});
}

export default Component;
