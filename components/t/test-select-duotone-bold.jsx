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
		"content": `<style>.bzecsub_a {
  d: path("M8 12h12");
}

.mjxjq9e4f {
  d: path("M8 5h12");
}

.oeboj9bgs {
  d: path("m3 9 3 3 -3 3Z");
}

.quua95b2b {
  fill: currentColor;
  d: path("m3 9 3 3 -3 3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.y_or9-s0p {
  d: path("M8 19h12");
}
</style><g class="s0phu2bbs"><path class="quua95b2b"/><path class="mjxjq9e4f"/><path class="bzecsub_a"/><path class="y_or9-s0p"/><path class="oeboj9bgs"/></g>`,
		"fallback": "iconmind:test-select-duotone-bold",
	});
}

export default Component;
