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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.izjp9jbek {
  d: path("M17.75 17.75v-8c.5 1.3 1.7 2 3.5 2.25");
}

.k04vwvbgs {
  cx: 15.25px;
  cy: 17.75px;
  r: 2.5px;
}

.vhot-xehv {
  d: path("M3.75 5.75h12.5m-12.5 5h12.5m-12.5 5h6");
}
</style><g class="hntgybcog"><path class="vhot-xehv"/><circle class="k04vwvbgs"/><path class="izjp9jbek"/></g>`,
		"fallback": "iconoven:playlist-download",
	});
}

export default Component;
