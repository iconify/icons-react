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
		"content": `<style>.kqc501bgm {
  width: 39px;
  height: 25px;
  x: 4.5px;
  y: 11.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
}

.p459mp70l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.596 21.568a6.5 6.5 0 1 0-9.192 0M17.5 29.472h13m-13 7h13");
}
</style><rect transform="rotate(90 24 24)" class="kqc501bgm"/><path class="p459mp70l"/>`,
		"fallback": "arcticons:my-device",
	});
}

export default Component;
