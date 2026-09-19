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
		"content": `<style>.cob2-rbbd {
  cx: 16.75px;
  cy: 22.75px;
  r: 0.75px;
  fill: currentColor;
}

.i2jgojbko {
  cx: 35.75px;
  cy: 25.75px;
  r: 1.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.jgj45wbhx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21 13.25h6m-5.121-1.237l4.243 2.475m-.001-2.475l-4.243 2.475M24 11.5V15");
}

.lyfspbbhf {
  cx: 31.25px;
  cy: 22.75px;
  r: 0.75px;
  fill: currentColor;
}

.oowsg8mfe {
  cx: 12.25px;
  cy: 25.75px;
  r: 1.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zxt22sqhm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 24c0-8.56 7.173-15.5 19.5-15.5S43.5 15.44 43.5 24c0 9.977-6.307 15.5-19.5 15.5S4.5 33.977 4.5 24");
}
</style><path class="zxt22sqhm"/><circle class="oowsg8mfe"/><circle class="i2jgojbko"/><path class="jgj45wbhx"/><circle class="cob2-rbbd"/><circle class="lyfspbbhf"/>`,
		"fallback": "arcticons:mikan",
	});
}

export default Component;
