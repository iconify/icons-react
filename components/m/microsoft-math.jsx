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
		"content": `<style>.f0my4_bob {
  width: 37px;
  height: 23px;
  x: 5.5px;
  y: 12.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
}

.nafvp4bps {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m30.13 21.97l-4.94 6.55m4.94 0l-4.94-6.55M31.45 19h-8.11l-3.88 10l-2.91-7.03");
}
</style><rect class="f0my4_bob"/><rect transform="rotate(90 24 24)" class="f0my4_bob"/><path class="nafvp4bps"/>`,
		"fallback": "arcticons:microsoft-math",
	});
}

export default Component;
