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
		"content": `<style>.df_dombal {
  d: path("M10.75 5.5h4A3.25 3.25 0 0 1 18 8.75V19.5m-2.75-2.75L18 19.5l2.75-2.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wvxidbnsz {
  d: path("m3.75 3.75l3.5 3.5m0-3.5l-3.5 3.5");
}

.x2ld5m6gw {
  cx: 5.5px;
  cy: 17.75px;
  r: 2.75px;
}
</style><g class="hntgybcog"><path class="wvxidbnsz"/><circle class="x2ld5m6gw"/><path class="df_dombal"/></g>`,
		"fallback": "iconoven:strategy-map",
	});
}

export default Component;
