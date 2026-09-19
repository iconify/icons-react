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
		"content": `<style>.aq7jz9b8l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6 37a3.82 3.82 0 0 1 3.82 3.8h0M6 27.22A13.59 13.59 0 0 1 19.59 40.8h0M6 32.2a8.6 8.6 0 0 1 8.61 8.6h0");
}

.p_1nugmig {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.81 35.89v4.91H6V14.35L16.91 7.2l10.9 7.15v1.78");
}

.toc85i01f {
  cx: 27.29px;
  cy: 26.02px;
  r: 9.89px;
}

.uh1_0xw1i {
  cx: 16.96px;
  cy: 12.04px;
  r: 1.76px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.w702shbzj {
  d: path("M21.7 22.74h11.36M21.7 26.1h11.36m-11.5 3.43h8.3m4.49 3.55l8.11 8.12");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="w702shbzj"/><circle class="toc85i01f"/></g><path class="aq7jz9b8l"/><circle class="uh1_0xw1i"/><path class="p_1nugmig"/>`,
		"fallback": "arcticons:taginfo",
	});
}

export default Component;
