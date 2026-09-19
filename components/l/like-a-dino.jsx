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
		"content": `<style>.cyc06j_hv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.752 29.939s6.322 6.235 13.053 1.163");
}

.mxa002b6k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.196 18.172c.459-10.217 19.877-16.964 27.151 2.157c6.566 18.864-16.426 22.457-29.754 17.41C2.71 35.079.033 21.554 15.196 18.17z");
}

.tnriovlnn {
  cx: 28.71px;
  cy: 17.604px;
  r: 0.75px;
  fill: currentColor;
}

.yxrav5bru {
  cx: 20.639px;
  cy: 16.388px;
  r: 0.75px;
  fill: currentColor;
}
</style><path class="mxa002b6k"/><path class="cyc06j_hv"/><circle class="yxrav5bru"/><circle class="tnriovlnn"/>`,
		"fallback": "arcticons:like-a-dino",
	});
}

export default Component;
