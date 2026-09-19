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
		"content": `<style>.a6l29pl5a {
  cx: 12.23px;
  cy: 38.04px;
  r: 1.39px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.d9couybyo {
  cx: 6.03px;
  cy: 27.28px;
  r: 1.39px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.dxamuvbbi {
  cx: 30.24px;
  cy: 6.84px;
  r: 1.39px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.gii35bbqs {
  cx: 8.13px;
  cy: 14.92px;
  r: 1.39px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.lnpeyzh2i {
  cx: 24px;
  cy: 24px;
  r: 14.21px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ns-_pt0jx {
  cx: 42.09px;
  cy: 27.19px;
  r: 1.39px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ramsog6hj {
  cx: 17.82px;
  cy: 6.83px;
  r: 1.39px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.sciy0obcd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 24l12.24-7.12");
}

.tch0cbb9j {
  cx: 35.81px;
  cy: 38.04px;
  r: 1.39px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zs2-iyqif {
  cx: 39.96px;
  cy: 14.88px;
  r: 1.39px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="d9couybyo"/><circle class="lnpeyzh2i"/><circle class="cpk0fnbgt"/><circle class="ramsog6hj"/><circle class="gii35bbqs"/><circle class="a6l29pl5a"/><circle class="tch0cbb9j"/><circle class="ns-_pt0jx"/><circle class="zs2-iyqif"/><circle class="dxamuvbbi"/><path class="sciy0obcd"/>`,
		"fallback": "arcticons:mobmuplat",
	});
}

export default Component;
