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
		"content": `<style>.pe3knyllu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 29h-6m6-10h-6m-25 10h-6m6-10h-6");
}

.t1mfal-np {
  cx: 24px;
  cy: 24px;
  r: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.wss7nob4e {
  width: 25px;
  height: 25px;
  x: 11.5px;
  y: 11.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 5px;
  ry: 5px;
}

.wuebimbem {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19 42.5v-6m10 6v-6m-10-25v-6m10 6v-6");
}
</style><circle class="t1mfal-np"/><path class="pe3knyllu"/><rect class="wss7nob4e"/><path class="wuebimbem"/>`,
		"fallback": "arcticons:inware",
	});
}

export default Component;
