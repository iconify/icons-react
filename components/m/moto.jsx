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
		"content": `<style>.umy3vp5fu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 36.23a45 45 0 0 0-3-5.7c-1.92-2.68-3.45-3.65-5.23-3.68C10.13 26.85 5.55 37 4.5 40.46L15.43 7.54z");
}

.wkenajbnu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 36.23l8.6-28.69l10.9 32.92c-1-3.44-5.63-13.61-11.31-13.61c-1.78 0-3.31 1-5.23 3.68a45 45 0 0 0-2.96 5.7");
}
</style><path class="umy3vp5fu"/><path class="wkenajbnu"/>`,
		"fallback": "arcticons:moto",
	});
}

export default Component;
