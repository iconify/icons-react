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
		"content": `<style>.dac2of7-f {
  cx: 8.5px;
  cy: 16.072px;
  r: 2px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.dus9klt7o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15 21.072h11.75M8.5 26.071h6.964l1.991-2.25h10.75");
}

.hzmq1wyts {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14 31.071h3.455c5.797 5.797 15.389 2.071 19.413-4.898c1.729-2.995 5.082-3.602 6.632-3.602c0 0-.526-2.5-4.875-2.5c-.946-2.998-6.003-3.91-9-1.024");
}

.lsh3rzbfj {
  cx: 20.75px;
  cy: 28.071px;
  r: 2px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.nlhiv8brw {
  cx: 6.5px;
  cy: 26.071px;
  r: 2px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ui4tptb1l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.75 28.071h4.455c2.693 0 4.375-2.182 4.375-4.875s-1.682-4.875-4.375-4.875h-6.964l-1.99-2.25H10.5");
}

.v_h89qm1n {
  cx: 13px;
  cy: 21.072px;
  r: 2px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.vl8i3lyij {
  cx: 12px;
  cy: 31.071px;
  r: 2px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="lsh3rzbfj"/><circle class="nlhiv8brw"/><circle class="v_h89qm1n"/><path class="ui4tptb1l"/><circle class="dac2of7-f"/><circle class="vl8i3lyij"/><path class="dus9klt7o"/><path class="hzmq1wyts"/>`,
		"fallback": "arcticons:v360-pro",
	});
}

export default Component;
