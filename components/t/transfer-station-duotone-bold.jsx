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
		"content": `<style>.d4colq8ps {
  d: path("m8 9 4 4 -4 4");
}

.d5b4fcc2f {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 19h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.iiqby484v {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m16 9 -4 4 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.l6csbcieq {
  d: path("m16 9 -4 4 4 4");
}

.rw6ho_bav {
  d: path("M2 9h20");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vzvxu2bkt {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m8 9 4 4 -4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xzbn7sr9p {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 9h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.z9ittvbis {
  d: path("M2 19h20");
}
</style><g class="s0phu2bbs"><path class="xzbn7sr9p"/><path class="d5b4fcc2f"/><path class="vzvxu2bkt"/><path class="iiqby484v"/><path class="rw6ho_bav"/><path class="z9ittvbis"/><path class="d4colq8ps"/><path class="l6csbcieq"/></g>`,
		"fallback": "iconmind:transfer-station-duotone-bold",
	});
}

export default Component;
