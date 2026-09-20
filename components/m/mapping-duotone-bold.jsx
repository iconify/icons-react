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
		"content": `<style>.a04thmuhx {
  d: path("M8 12h7");
}

.b7d0yco4i {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 12h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.bs0a9_brj {
  fill: currentColor;
  d: path("M4 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.lrj576xsh {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 6h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mq8aagbsg {
  fill: currentColor;
  d: path("M4 18a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.n8h0kccut {
  d: path("M4 18a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.o3p-ebloq {
  d: path("M8 18h10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uc575rzhk {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 18h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.w86l7qbyt {
  fill: currentColor;
  d: path("M4 6a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.wl2374scp {
  d: path("M8 6h10");
}

.xzn4jmbzj {
  d: path("M4 6a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.yw0xzbbmi {
  d: path("M4 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="s0phu2bbs"><path class="w86l7qbyt"/><path class="bs0a9_brj"/><path class="mq8aagbsg"/><path class="lrj576xsh"/><path class="b7d0yco4i"/><path class="uc575rzhk"/><path class="xzn4jmbzj"/><path class="yw0xzbbmi"/><path class="n8h0kccut"/><path class="wl2374scp"/><path class="a04thmuhx"/><path class="o3p-ebloq"/></g>`,
		"fallback": "iconmind:mapping-duotone-bold",
	});
}

export default Component;
