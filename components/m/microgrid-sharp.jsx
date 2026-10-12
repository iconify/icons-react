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
		"content": `<style>.e9-7-8-2z {
  cx: 12px;
  cy: 4.75px;
  r: 2px;
}

.hnv9gbb9i {
  cx: 4.75px;
  cy: 11px;
  r: 2px;
}

.io3g52bpb {
  cx: 19.25px;
  cy: 11px;
  r: 2px;
}

.o33surbdg {
  d: path("M12 6.75v2.5m-5.5 3L8.75 14m8.75-1.75L15.25 14");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z8tcj_b2b {
  d: path("M8 20.25v-5l.75-.66l2.5-2.18l.75-.66l.75.66l2.5 2.18l.75.66v6H8z");
}
</style><g class="x2cwu0gfd"><path class="z8tcj_b2b"/><circle class="e9-7-8-2z"/><circle class="hnv9gbb9i"/><circle class="io3g52bpb"/><path class="o33surbdg"/></g>`,
		"fallback": "iconoven:microgrid-sharp",
	});
}

export default Component;
