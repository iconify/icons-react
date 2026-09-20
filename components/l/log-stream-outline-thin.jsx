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
		"content": `<style>.cxodqhtoo {
  d: path("m19 17 2 2 -2 2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k62k_4bsl {
  d: path("M3 13h16");
}

.k6nj2fbya {
  d: path("M3 5h18");
}

.n7wfhbrgu {
  d: path("M3 17h11");
}

.sixdm4bhp {
  d: path("M3 9h14");
}
</style><g class="hntgybcog"><path class="k6nj2fbya"/><path class="sixdm4bhp"/><path class="k62k_4bsl"/><path class="n7wfhbrgu"/><path class="cxodqhtoo"/></g>`,
		"fallback": "iconmind:log-stream-outline-thin",
	});
}

export default Component;
