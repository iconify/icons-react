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
		"content": `<style>.earhjk-cy {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 6h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n-7t0yb1r {
  d: path("M3 13h18");
}

.r4xjkv11f {
  d: path("M3 10h15");
}

.t-3s33n5f {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 17h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.t94gi6bhh {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 10h15");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tw7777n4m {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 21h9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ukjt4fb6s {
  d: path("M3 17h12");
}

.wtr271uqu {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 13h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xgrfb-bqu {
  d: path("M3 6h18");
}

.yvi-t83_e {
  d: path("M3 21h9");
}
</style><g class="hntgybcog"><path class="earhjk-cy"/><path class="t94gi6bhh"/><path class="wtr271uqu"/><path class="t-3s33n5f"/><path class="tw7777n4m"/><path class="xgrfb-bqu"/><path class="r4xjkv11f"/><path class="n-7t0yb1r"/><path class="ukjt4fb6s"/><path class="yvi-t83_e"/></g>`,
		"fallback": "iconmind:top-k-duotone-thin",
	});
}

export default Component;
