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
		"content": `<style>.bpdd4x3je {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15.6 15.6h.01m3.29 3.3h.01");
}

.gqdwd_bjh {
  cx: 17.25px;
  cy: 17.25px;
  r: 4px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iqm3d-b4a {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M19 15.5L15.5 19");
}

.peoliacxi {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 18.75V8.55l.78-.62l5.69-4.55l.78-.63l.78.63l5.69 4.55l.78.62v1.7a7 7 0 0 0-7 7v2.5h-7.5z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="peoliacxi"/><circle class="gqdwd_bjh"/><path class="iqm3d-b4a"/><path class="bpdd4x3je"/></g>`,
		"fallback": "iconoven:mortgage-house-sharp",
	});
}

export default Component;
