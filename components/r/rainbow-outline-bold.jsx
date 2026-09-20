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
		"content": `<style>.ic_pehd5a {
  d: path("M3 17h18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
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
</style><g class="s0phu2bbs"><path class="srzgk7jml"/><path class="vvh_i7bfp"/><path class="tcbtlrbob"/><path class="ic_pehd5a"/></g>`,
		"fallback": "iconmind:rainbow-outline-bold",
	});
}

export default Component;
