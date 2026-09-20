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

.jkuojibnm {
  d: path("M3 20h18");
}

.mtax_6bie {
  d: path("M13 16v4");
}

.t3rq50btb {
  d: path("M19 4v16");
}

.v9qvd19wv {
  d: path("M5 11v9");
}

.wcigoab1j {
  d: path("M9 14v6");
}
</style><g class="hntgybcog"><path class="jkuojibnm"/><path class="v9qvd19wv"/><path class="wcigoab1j"/><path class="mtax_6bie"/><path class="t3rq50btb"/></g>`,
		"fallback": "iconmind:latency-p99-outline-thin",
	});
}

export default Component;
