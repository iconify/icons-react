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
		"content": `<style>.did41pbsp {
  d: path("m15 7 3 -3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.honr8jg5b {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 16h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ilq8q26uw {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M15 10c4 0 4 6 0 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jvpl-4ewk {
  d: path("M15 10c4 0 4 6 0 6");
}

.lymn1951z {
  d: path("M6 12h4");
}

.oxrhbbb8u {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M5 6v14h10V6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rsteb5bse {
  d: path("M5 6v14h10V6");
}

.twn25-b-k {
  d: path("M6 16h4");
}

.x705m_bfs {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 12h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zvwggjggn {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m15 7 3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="oxrhbbb8u"/><path class="zvwggjggn"/><path class="ilq8q26uw"/><path class="x705m_bfs"/><path class="honr8jg5b"/><path class="rsteb5bse"/><path class="did41pbsp"/><path class="jvpl-4ewk"/><path class="lymn1951z"/><path class="twn25-b-k"/></g>`,
		"fallback": "iconmind:measuring-jug-duotone-thin",
	});
}

export default Component;
