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
		"content": `<style>.gda061y_o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.05 20.04L25.632 6.191a2.53 2.53 0 0 0-3.263 0L5.954 20.04a1.266 1.266 0 0 0 .816 2.233h4.343v17.45a1 1 0 0 0 1 1h8.296v-6.209a3.73 3.73 0 0 1 3.4-3.792a3.594 3.594 0 0 1 3.786 3.589v6.412h8.296a1 1 0 0 0 1-1v-17.45h4.342a1.266 1.266 0 0 0 .816-2.233");
}

.ro87aobsg {
  cx: 24.002px;
  cy: 23.159px;
  r: 4.506px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="gda061y_o"/><circle class="ro87aobsg"/>`,
		"fallback": "arcticons:life-fits-into-home",
	});
}

export default Component;
