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
		"content": `<style>.fa7lsebpo {
  stroke-linejoin: round;
  d: path("M9.5 8L9.5 16M12 13.25L9.5 16L7 13.25");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qsgur_bab {
  stroke-linejoin: round;
  d: path("M14.5 16L14.5 8M17 10.75L14.5 8L12 10.75");
}

.shu3xdl9q {
  cx: 12px;
  cy: 12px;
  r: 10px;
}
</style><g class="ipq1z-bjh"><circle class="shu3xdl9q"/><path class="fa7lsebpo"/><path class="qsgur_bab"/></g>`,
		"fallback": "solar:round-sort-vertical-linear",
	});
}

export default Component;
