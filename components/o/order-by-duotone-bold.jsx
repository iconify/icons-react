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
		"content": `<style>.h7vr07ufd {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 5h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.j-myddb5e {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 15h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k6nj2fbya {
  d: path("M3 5h18");
}

.kfua5lbaj {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 10h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.o46_3ibvz {
  d: path("M3 20h6");
}

.pbd66000m {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 20h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qxnpdo0dk {
  d: path("M3 10h14");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.zuu1wnb1v {
  d: path("M3 15h10");
}
</style><g class="s0phu2bbs"><path class="h7vr07ufd"/><path class="kfua5lbaj"/><path class="j-myddb5e"/><path class="pbd66000m"/><path class="k6nj2fbya"/><path class="qxnpdo0dk"/><path class="zuu1wnb1v"/><path class="o46_3ibvz"/></g>`,
		"fallback": "iconmind:order-by-duotone-bold",
	});
}

export default Component;
