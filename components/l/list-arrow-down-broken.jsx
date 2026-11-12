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
		"content": `<style>.djbi_ub-i {
  d: path("M11 18H3");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pre11cbbs {
  d: path("M3 6L13.5 6M17.75 6L20 6");
}

.qesyv5buv {
  d: path("M11 14L3 14");
}

.qtz6yi5yq {
  d: path("M20 10L9.5 10M5.25 10H3");
}

.vyd1bmbqz {
  stroke-linejoin: round;
  d: path("M20 17.5L17.5 20L15 17.5M17.5 20V14");
}
</style><g class="ipq1z-bjh"><path class="vyd1bmbqz"/><path class="qesyv5buv"/><path class="djbi_ub-i"/><path class="pre11cbbs"/><path class="qtz6yi5yq"/></g>`,
		"fallback": "solar:list-arrow-down-broken",
	});
}

export default Component;
