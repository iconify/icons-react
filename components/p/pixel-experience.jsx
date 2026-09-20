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
		"content": `<style>.srq5_h-9e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 9.404V3.5m0 22.304v5.904m8.2-14.104h5.904m-22.304 0H9.896M15.8 29.078v12.47a2.952 2.952 0 0 1-5.904 0V17.605");
}

.v34_7jb3k {
  cx: 24px;
  cy: 17.604px;
  r: 14.104px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.yj2oxvl4f {
  cx: 24px;
  cy: 17.604px;
  r: 8.2px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="v34_7jb3k"/><circle class="yj2oxvl4f"/><path class="srq5_h-9e"/>`,
		"fallback": "arcticons:pixel-experience",
	});
}

export default Component;
