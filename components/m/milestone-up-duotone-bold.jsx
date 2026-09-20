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
		"content": `<style>.crv4i00bu {
  d: path("M4 3v18");
}

.lulmb9b1a {
  d: path("M4 4h16v12H4");
}

.mepcfzh1h {
  d: path("m10 12.5 2 -2 2 2");
}

.nwnqkr0dc {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m10 12.5 2 -2 2 2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qn-h03e3f {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 3v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.r5_rfib3l {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m10 9.5 2 -2 2 2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tguw93wue {
  d: path("m10 9.5 2 -2 2 2");
}

.zwjzc3g_l {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 4h16v12H4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="qn-h03e3f"/><path class="zwjzc3g_l"/><path class="r5_rfib3l"/><path class="nwnqkr0dc"/><path class="crv4i00bu"/><path class="lulmb9b1a"/><path class="tguw93wue"/><path class="mepcfzh1h"/></g>`,
		"fallback": "iconmind:milestone-up-duotone-bold",
	});
}

export default Component;
