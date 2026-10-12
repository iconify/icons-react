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
		"content": `<style>.h_tsn8bxt {
  cx: 12px;
  cy: 12px;
  r: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tnc0myrrn {
  d: path("m13.06 3.81l7.13 7.13q1.06 1.06 0 2.12l-7.13 7.13q-1.06 1.06-2.12 0l-7.13-7.13q-1.06-1.06 0-2.12l7.13-7.13q1.06-1.06 2.12 0M12 4v5m0 6v5m-8-8h5m6 0h5");
}
</style><g class="hntgybcog"><path class="tnc0myrrn"/><circle class="h_tsn8bxt"/></g>`,
		"fallback": "iconoven:solar-sail",
	});
}

export default Component;
