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
		"content": `<style>.n7n39_biw {
  cx: 29.318px;
  cy: 24px;
  r: 14.182px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.nihztstgy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.012 37.142a14.2 14.2 0 0 1-5.33 1.04A14.18 14.18 0 0 1 4.5 24A14.18 14.18 0 0 1 18.682 9.818a14.2 14.2 0 0 1 5.358 1.05");
}
</style><path class="nihztstgy"/><circle class="n7n39_biw"/>`,
		"fallback": "arcticons:kai",
	});
}

export default Component;
