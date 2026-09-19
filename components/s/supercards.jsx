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
		"content": `<style>.kj8awyb6i {
  width: 23.674px;
  height: 13.601px;
  x: 11.048px;
  y: 25.696px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.198px;
  ry: 2.198px;
}

.p8bgisb3l {
  width: 23.674px;
  height: 13.601px;
  x: 13.277px;
  y: 8.703px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.198px;
  ry: 2.198px;
}
</style><rect transform="rotate(-30 22.885 32.496)" class="kj8awyb6i"/><rect transform="rotate(-30 25.115 15.504)" class="p8bgisb3l"/>`,
		"fallback": "arcticons:supercards",
	});
}

export default Component;
