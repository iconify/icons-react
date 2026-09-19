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
		"content": `<style>.b7oyfv17a {
  cx: 35.116px;
  cy: 29.334px;
  r: 3.309px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.be57hbcse {
  cx: 22.535px;
  cy: 21.662px;
  r: 4.768px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ci9gh8brp {
  cx: 25.905px;
  cy: 10.94px;
  r: 3.878px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.hmy85y4fk {
  cx: 24.617px;
  cy: 35.794px;
  r: 6.307px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ibik9ibpb {
  cx: 37.751px;
  cy: 18.569px;
  r: 4.768px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.r_m0-ac_x {
  cx: 9.869px;
  cy: 39.113px;
  r: 4.387px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.t9n2q7b0h {
  cx: 12.619px;
  cy: 28.552px;
  r: 3.309px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.v2ftg1bcz {
  cx: 36.615px;
  cy: 7.511px;
  r: 3.011px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="hmy85y4fk"/><circle class="be57hbcse"/><circle class="ibik9ibpb"/><circle class="r_m0-ac_x"/><circle class="t9n2q7b0h"/><circle class="b7oyfv17a"/><circle class="v2ftg1bcz"/><circle class="ci9gh8brp"/>`,
		"fallback": "arcticons:travana",
	});
}

export default Component;
