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
		"content": `<style>.gzcw-kt2d {
  cx: 24px;
  cy: 11.906px;
  r: 9.406px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.h08g_4b2b {
  cx: 13.527px;
  cy: 17.953px;
  r: 9.406px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.tvszrwkla {
  cx: 34.474px;
  cy: 17.953px;
  r: 9.406px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.wv6kc-pwf {
  cx: 34.474px;
  cy: 30.047px;
  r: 9.406px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.x6_sddbfy {
  cx: 13.527px;
  cy: 30.047px;
  r: 9.406px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.yu2lg6_2d {
  cx: 24px;
  cy: 36.094px;
  r: 9.406px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="wv6kc-pwf"/><circle class="tvszrwkla"/><circle class="gzcw-kt2d"/><circle class="h08g_4b2b"/><circle class="x6_sddbfy"/><circle class="yu2lg6_2d"/>`,
		"fallback": "arcticons:synology-photos",
	});
}

export default Component;
