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
		"content": `<style>.jvw6wpbjh {
  width: 37px;
  height: 18.5px;
  x: 5.5px;
  y: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.ny3ocrv_c {
  width: 24px;
  height: 18.5px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.yvzwtjf7y {
  width: 13px;
  height: 18.5px;
  x: 29.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><rect class="ny3ocrv_c"/><rect class="jvw6wpbjh"/><rect class="yvzwtjf7y"/>`,
		"fallback": "arcticons:promova",
	});
}

export default Component;
