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

.ksycnbcez {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 21.025v10.6");
}

.mc8zfnb7w {
  cx: 24px;
  cy: 17.125px;
  r: 0.75px;
  fill: currentColor;
}
</style><circle class="cpk0fnbgt"/><circle class="mc8zfnb7w"/><path class="ksycnbcez"/>`,
		"fallback": "arcticons:letter-lowercase-circle-i",
	});
}

export default Component;
