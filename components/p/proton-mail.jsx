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
		"content": `<style>.hk_pp2brl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 9.266a.897.897 0 0 1 1.47-.69L21.421 21.41a4.035 4.035 0 0 0 5.156 0L42.03 8.577a.897.897 0 0 1 1.469.69v26.33a4.035 4.035 0 0 1-4.035 4.035H8.535A4.035 4.035 0 0 1 4.5 35.598Z");
}

.mpeoh-d5l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m29.265 19.178l.002.002l-7.782 6.874a3.586 3.586 0 0 1-4.667.07L4.5 15.879m30.707-1.636v25.389");
}
</style><path class="hk_pp2brl"/><path class="mpeoh-d5l"/>`,
		"fallback": "arcticons:proton-mail",
	});
}

export default Component;
