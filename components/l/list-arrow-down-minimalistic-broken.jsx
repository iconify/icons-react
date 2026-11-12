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
		"content": `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jh9foyc5c {
  d: path("M12 11L3 11");
}

.jtti8bn6v {
  stroke-linejoin: round;
  d: path("M20 14.5L17.5 17L15 14.5M17.5 17V9");
}

.pre11cbbs {
  d: path("M3 6L13.5 6M17.75 6L20 6");
}

.zz_qntbxb {
  d: path("M11 16L3 16");
}
</style><g class="ipq1z-bjh"><path class="zz_qntbxb"/><path class="jh9foyc5c"/><path class="jtti8bn6v"/><path class="pre11cbbs"/></g>`,
		"fallback": "solar:list-arrow-down-minimalistic-broken",
	});
}

export default Component;
