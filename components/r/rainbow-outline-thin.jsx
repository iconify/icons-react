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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ic_pehd5a {
  d: path("M3 17h18");
}

.srzgk7jml {
  d: path("M3 17a9 9 0 0 1 18 0");
}

.tcbtlrbob {
  d: path("M8 17a4 4 0 0 1 8 0");
}

.vvh_i7bfp {
  d: path("M5.5 17a6.5 6.5 0 0 1 13 0");
}
</style><g class="hntgybcog"><path class="srzgk7jml"/><path class="vvh_i7bfp"/><path class="tcbtlrbob"/><path class="ic_pehd5a"/></g>`,
		"fallback": "iconmind:rainbow-outline-thin",
	});
}

export default Component;
