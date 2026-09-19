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

.q8el3hbpm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.5 16.5h15v15h-15zm15 0V3.845M16.5 16.5V3.845m15 27.655h12.655M31.5 16.5h12.655M16.5 31.5v12.655m15-12.655v12.655M16.5 16.5H3.845m12.655 15H3.845");
}
</style><circle class="cpk0fnbgt"/><path class="q8el3hbpm"/>`,
		"fallback": "arcticons:smallpdf",
	});
}

export default Component;
