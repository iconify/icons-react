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
		"content": `<style>.bolhs6bma {
  fill: currentColor;
  d: path("M8.5 12.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.coxvs_bhc {
  d: path("m12 3l9.75 18H2.25Z");
}

.qapl4_bwq {
  fill: currentColor;
  d: path("M14.5 14.75a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w06mib35b {
  d: path("m7.75 18.25l2-3.5l2 3.5");
}

.xxuifs61r {
  d: path("m14.25 18.25l1.25-1.75l1.25 1.75");
}
</style><g class="ulnmmdpxh"><path class="coxvs_bhc"/><path class="bolhs6bma"/><path class="w06mib35b"/><path class="qapl4_bwq"/><path class="xxuifs61r"/></g>`,
		"fallback": "uix-sharp:school-zone-sign",
	});
}

export default Component;
