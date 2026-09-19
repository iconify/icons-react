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
		"content": `<style>.f-7sgcv1p {
  cx: 30.286px;
  cy: 12.429px;
  r: 2.643px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
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

.lyw85_zjb {
  cx: 35.571px;
  cy: 17.714px;
  r: 2.643px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.p6e94ohva {
  cx: 25px;
  cy: 17.714px;
  r: 2.643px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.y-3kkqbao {
  cx: 30.286px;
  cy: 23px;
  r: 2.643px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><rect class="j3s9ivbxi"/><circle class="p6e94ohva"/><circle class="lyw85_zjb"/><circle class="y-3kkqbao"/><circle class="f-7sgcv1p"/>`,
		"fallback": "arcticons:movavi-clips",
	});
}

export default Component;
