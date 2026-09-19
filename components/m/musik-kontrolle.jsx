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
		"content": `<style>.bmnj8d5ex {
  cx: 20.823px;
  cy: 25.622px;
  r: 1.876px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.kgkqe5b0f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.149 26.948l4.983-4.983v3.861m-12.338 5.931l1.769 1.768l-1.769 1.768l-1.768-1.768zm1.718 5.253l2.261.494l-.493-2.262m-5.202-5.202l-2.262-.494l.493 2.262m26.178-12.351a8.624 8.624 0 0 0-8.624-8.624M42.5 19.457A13.637 13.637 0 0 0 28.863 5.82");
}

.w4ik8iblc {
  width: 16.255px;
  height: 28.134px;
  x: 12.03px;
  y: 13.456px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.501px;
}

.z79pfubjg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m14.063 26.299l7.958 7.957");
}
</style><rect transform="rotate(45 20.158 27.522)" class="w4ik8iblc"/><path class="z79pfubjg"/><circle class="bmnj8d5ex"/><path class="kgkqe5b0f"/>`,
		"fallback": "arcticons:musik-kontrolle",
	});
}

export default Component;
