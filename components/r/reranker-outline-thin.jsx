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
		"content": `<style>.a2pxmcc-f {
  d: path("m18 16 2 2 2 -2");
}

.autc-bc3p {
  d: path("M3 18h13");
}

.bv72su-ri {
  d: path("M3 12h13");
}

.bvirm9d4j {
  d: path("M20 6v12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x2rmxpb0x {
  d: path("M3 6h13");
}
</style><g class="hntgybcog"><path class="x2rmxpb0x"/><path class="bv72su-ri"/><path class="autc-bc3p"/><path class="bvirm9d4j"/><path class="a2pxmcc-f"/></g>`,
		"fallback": "iconmind:reranker-outline-thin",
	});
}

export default Component;
