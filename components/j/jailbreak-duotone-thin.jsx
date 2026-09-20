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
		"content": `<style>.hbuw0obat {
  d: path("M17 3v6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jfmvsgbrx {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M5 3v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nm7sxz4gr {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M17 3v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ojq3d2bwe {
  d: path("M5 3v18");
}

.r7pmyrb1c {
  d: path("M14 15h5");
}

.v28q9db1j {
  d: path("M11 3v18");
}

.vcbx2ik3k {
  d: path("m17 12 3 3 -3 3");
}

.wdjmdsb7h {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M11 3v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wr45-4gqz {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m17 12 3 3 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.y1x43_b7q {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M14 15h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="jfmvsgbrx"/><path class="wdjmdsb7h"/><path class="nm7sxz4gr"/><path class="y1x43_b7q"/><path class="wr45-4gqz"/><path class="ojq3d2bwe"/><path class="v28q9db1j"/><path class="hbuw0obat"/><path class="r7pmyrb1c"/><path class="vcbx2ik3k"/></g>`,
		"fallback": "iconmind:jailbreak-duotone-thin",
	});
}

export default Component;
