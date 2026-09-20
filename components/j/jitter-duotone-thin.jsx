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
		"content": `<style>.hf_gtezns {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 18h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k-59hn8hc {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m3 15 5 -5 2 2 4 -4 3 3 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kyboc-b7u {
  d: path("m3 15 5 -5 2 2 4 -4 3 3 4 -4");
}

.xyj-l9cjp {
  d: path("M3 18h18");
}
</style><g class="hntgybcog"><path class="k-59hn8hc"/><path class="hf_gtezns"/><path class="kyboc-b7u"/><path class="xyj-l9cjp"/></g>`,
		"fallback": "iconmind:jitter-duotone-thin",
	});
}

export default Component;
