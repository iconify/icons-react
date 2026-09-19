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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.esq9nccgv {
  width: 4.751px;
  height: 14.806px;
  x: 14.521px;
  y: 26.256px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.163px;
}

.ry26xbs3y {
  width: 4.747px;
  height: 18.109px;
  x: 20.145px;
  y: 13.059px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.113px;
}

.ydivbubzu {
  width: 4.542px;
  height: 13.983px;
  x: 31.842px;
  y: 9.676px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.162px;
}
</style><circle class="cpk0fnbgt"/><rect transform="rotate(-45.008 22.518 22.113)" class="ry26xbs3y"/><rect transform="rotate(-67.702 16.897 33.66)" class="esq9nccgv"/><rect transform="rotate(-22.141 34.113 16.668)" class="ydivbubzu"/>`,
		"fallback": "arcticons:subito",
	});
}

export default Component;
