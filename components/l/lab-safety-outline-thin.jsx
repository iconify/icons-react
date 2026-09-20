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
		"content": `<style>.gwnaabclj {
  d: path("M12 9v5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.me177l4bh {
  d: path("M11 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.qk-gt2bvd {
  d: path("m12 3 9 16H3Z");
}
</style><g class="hntgybcog"><path class="qk-gt2bvd"/><path class="gwnaabclj"/><path class="me177l4bh"/></g>`,
		"fallback": "iconmind:lab-safety-outline-thin",
	});
}

export default Component;
