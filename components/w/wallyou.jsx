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
		"content": `<style>.ap9xv_bdc {
  cx: 37.589px;
  cy: 14.964px;
  r: 1.706px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.pxulhgbcm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.344 38.304H4.5L17.906 19.01l8.264 11.892m-5.826 7.402l11.578-14.67L43.5 38.305zM37.365 20.07l-1.47-1.618l-2.14-.04l.105-2.183l-1.485-1.542l1.618-1.47l.04-2.14l2.183.105l1.542-1.485l1.469 1.618l2.14.04l-.105 2.183l1.486 1.541l-1.618 1.47l-.04 2.14l-2.183-.105z");
}
</style><path class="pxulhgbcm"/><circle class="ap9xv_bdc"/>`,
		"fallback": "arcticons:wallyou",
	});
}

export default Component;
