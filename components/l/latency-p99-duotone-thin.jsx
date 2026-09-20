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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hsnj9o-9y {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 20h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jkuojibnm {
  d: path("M3 20h18");
}

.leef4tbvz {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M19 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mtax_6bie {
  d: path("M13 16v4");
}

.rr8ohtbyv {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M13 16v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.t3rq50btb {
  d: path("M19 4v16");
}

.uce-uzwap {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9 14v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.v9qvd19wv {
  d: path("M5 11v9");
}

.wcigoab1j {
  d: path("M9 14v6");
}

.xevwjp71u {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M5 11v9");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="hsnj9o-9y"/><path class="xevwjp71u"/><path class="uce-uzwap"/><path class="rr8ohtbyv"/><path class="leef4tbvz"/><path class="jkuojibnm"/><path class="v9qvd19wv"/><path class="wcigoab1j"/><path class="mtax_6bie"/><path class="t3rq50btb"/></g>`,
		"fallback": "iconmind:latency-p99-duotone-thin",
	});
}

export default Component;
