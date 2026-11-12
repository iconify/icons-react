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
		"content": `<style>.cavrtqb0h {
  stroke-linejoin: round;
  d: path("M17 10L7 10L10.4375 7");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.shu3xdl9q {
  cx: 12px;
  cy: 12px;
  r: 10px;
}

.yvp5mpkiq {
  stroke-linejoin: round;
  d: path("M7 14L17 14L13.5625 17");
}
</style><g class="ipq1z-bjh"><circle class="shu3xdl9q"/><path class="cavrtqb0h"/><path class="yvp5mpkiq"/></g>`,
		"fallback": "solar:round-transfer-horizontal-linear",
	});
}

export default Component;
