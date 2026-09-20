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
		"content": `<style>.e4wspy4fl {
  d: path("M15 11.5V17");
}

.jrpnc2pnl {
  d: path("M15 5h3a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V8a3 3 0 0 1 3 -3h3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p889v3ylq {
  d: path("m7.5 11.5 3 -3h3l3 3");
}

.taxmbub4q {
  d: path("M6 17h12");
}

.wflm7cb-d {
  d: path("M9 11.5V17");
}

.wfnksvb6z {
  d: path("M6 11.5h12");
}

.z92okmbgh {
  fill: currentColor;
  d: path("M15 5h3a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V8a3 3 0 0 1 3 -3h3");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="z92okmbgh"/><path class="jrpnc2pnl"/><path class="p889v3ylq"/><path class="wfnksvb6z"/><path class="wflm7cb-d"/><path class="e4wspy4fl"/><path class="taxmbub4q"/></g>`,
		"fallback": "iconmind:online-banking-duotone-regular",
	});
}

export default Component;
