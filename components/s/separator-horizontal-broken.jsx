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
		"content": `<style>.gvc65tz1p {
  d: path("M13.5 4.5L12 3L6 9M16.5 7.5L18 9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oyjqk5bct {
  d: path("M22 12H2");
}

.skf2dub_m {
  d: path("M13.5 19.5L12 21L6 15M16.5 16.5L18 15");
}
</style><g class="hntgybcog"><path class="gvc65tz1p"/><path class="skf2dub_m"/><path class="oyjqk5bct"/></g>`,
		"fallback": "solar:separator-horizontal-broken",
	});
}

export default Component;
