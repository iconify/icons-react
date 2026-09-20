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

.u-pn1xbtk {
  d: path("M8 7a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.vwqgo5sgm {
  d: path("M12 14v6.5");
}

.xujn_cdhr {
  d: path("m9.5 18 2.5 2.5 2.5 -2.5");
}
</style><g class="hntgybcog"><path class="u-pn1xbtk"/><path class="vwqgo5sgm"/><path class="xujn_cdhr"/></g>`,
		"fallback": "iconmind:price-down-outline-thin",
	});
}

export default Component;
