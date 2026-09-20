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
		"content": `<style>.a67_cn3fi {
  d: path("M13.5 7.5 16 10l-2.5 2.5");
}

.ar4hknbfx {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M13.5 7.5 16 10l-2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.crv4i00bu {
  d: path("M4 3v18");
}

.h4v67m-gy {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M10.5 7.5 13 10l-2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lulmb9b1a {
  d: path("M4 4h16v12H4");
}

.pr2xdw8hh {
  d: path("M10.5 7.5 13 10l-2.5 2.5");
}

.qn-h03e3f {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 3v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.zwjzc3g_l {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 4h16v12H4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="qn-h03e3f"/><path class="zwjzc3g_l"/><path class="h4v67m-gy"/><path class="ar4hknbfx"/><path class="crv4i00bu"/><path class="lulmb9b1a"/><path class="pr2xdw8hh"/><path class="a67_cn3fi"/></g>`,
		"fallback": "iconmind:next-milestone-duotone-bold",
	});
}

export default Component;
