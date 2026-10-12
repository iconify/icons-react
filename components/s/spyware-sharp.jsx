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
		"content": `<style>.cs185qb-c {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 14h.01");
}

.g2s6n2-pq {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 14c1.5-2.25 3.4-3.25 5.5-3.25s4 1 5.5 3.25c-1.5 2.25-3.4 3.25-5.5 3.25s-4-1-5.5-3.25Z");
}

.pe46q9njx {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4h18.5v16H2.75zm0 4h18.5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="pe46q9njx"/><path class="g2s6n2-pq"/><path class="cs185qb-c"/></g>`,
		"fallback": "iconoven:spyware-sharp",
	});
}

export default Component;
