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
		"content": `<style>.bxvrseb2m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m30.445 13.573l3.459-5.677");
}

.cf0sxsb7a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.412 16.512H8.588L5.5 32.707h37z");
}

.nk_zjmvoe {
  cx: 30.042px;
  cy: 22.506px;
  r: 2.392px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ohhz6kg0w {
  cx: 17.958px;
  cy: 22.506px;
  r: 2.392px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.syla1ub9e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.2 13.573H12.8L8.591 35.646h30.818z");
}

.xu4ckdiir {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m17.555 13.573l-3.458-5.677");
}
</style><path class="syla1ub9e"/><path class="cf0sxsb7a"/><circle class="ohhz6kg0w"/><path class="xu4ckdiir"/><circle class="nk_zjmvoe"/><path class="bxvrseb2m"/>`,
		"fallback": "arcticons:tapk",
	});
}

export default Component;
