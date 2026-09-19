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
		"content": `<style>.up4o7_b1k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.468 42.5h9.351V23.16c0-3.005-.75-5.834-2.073-8.31l3.754.002V5.5H23.16C13.406 5.5 5.5 13.406 5.5 23.16s7.906 17.659 17.66 17.659c2.905 0 5.766-.717 8.318-2.082z");
}

.vd6vlfbgw {
  cx: 23.16px;
  cy: 23.159px;
  r: 8.308px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="vd6vlfbgw"/><path class="up4o7_b1k"/>`,
		"fallback": "arcticons:oasa-telematics",
	});
}

export default Component;
