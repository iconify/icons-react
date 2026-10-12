import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.k1xkp0ssi {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.25 8.5h3.25v4.75");
}

.mfv9vj9km {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 9.9h.01");
}

.n_wduw2dw {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 7.75h8.5M7.75 12h8.5");
}

.uyehhvbug {
  width: 8.5px;
  height: 9.25px;
  x: 7.75px;
  y: 5.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2px;
}

.y520bgbjq {
  cx: 19.5px;
  cy: 14.5px;
  r: 1.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.z0jwvcccx {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 5.25v-2.5m0 11.75v6.75");
}
</style><g class="y9tr6bcfx"><path class="z0jwvcccx"/><rect class="uyehhvbug"/><path class="n_wduw2dw"/><path class="mfv9vj9km"/><path class="k1xkp0ssi"/><circle class="y520bgbjq"/></g>`,
		"fallback": "iconoven:prayer-wheel",
	});
}

export default Component;
