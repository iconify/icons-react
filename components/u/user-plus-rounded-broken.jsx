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
		"content": `<style>.dtl23o_xq {
  cx: 12px;
  cy: 6px;
  r: 4px;
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jngzddcir {
  d: path("M20.4144 18.5H19.0001M19.0001 18.5H17.5859M19.0001 18.5L19.0001 17.0858M19.0001 18.5L19.0001 19.9142");
}

.yez-gzbul {
  d: path("M15.5841 20.4366C14.5358 20.7944 13.3099 21 12 21C8.13401 21 5 19.2091 5 17C5 15.6407 6.18652 14.4398 8 13.717M12 13C14.6083 13 16.8834 13.8152 18.0877 15.024");
}
</style><g class="ipq1z-bjh"><circle class="dtl23o_xq"/><path class="jngzddcir"/><path class="yez-gzbul"/></g>`,
		"fallback": "solar:user-plus-rounded-broken",
	});
}

export default Component;
