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
		"content": `<style>.fa86--zll {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m35.627 18.148l2.631-1.308l.845 1.713");
}

.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.t1_5jwbfi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m10.103 28.656l5.877-9.326v9.326l5.876-9.326v9.326M38.258 16.84l-7.446 11.816V19.33l-5.876 9.326V19.33");
}
</style><path class="t1_5jwbfi"/><path class="fa86--zll"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:marketwatch",
	});
}

export default Component;
