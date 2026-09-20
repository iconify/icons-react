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
		"content": `<style>.k2i6ze2yw {
  d: path("M6 15v-3h12v3");
}

.oqx2fjbwx {
  d: path("m18 15 3 3 -3 3 -3 -3Z");
}

.pfpu_3ppl {
  d: path("M12 8v4");
}

.pus9z-bwo {
  d: path("m12 2 3 3 -3 3 -3 -3Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.y7kkpcbjj {
  d: path("m6 15 3 3 -3 3 -3 -3Z");
}
</style><g class="s0phu2bbs"><path class="pus9z-bwo"/><path class="pfpu_3ppl"/><path class="k2i6ze2yw"/><path class="y7kkpcbjj"/><path class="oqx2fjbwx"/></g>`,
		"fallback": "iconmind:model-family-outline-bold",
	});
}

export default Component;
