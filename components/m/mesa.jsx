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

.jsseqobwf {
  d: path("m6.62 20.46l.51-3.17q.12-.79.75-1.16q.62-.38.68-1.18l.38-5.65q.06-.8.86-.8h4.4q.8 0 .89.79l.32 2.67q.09.79.72 1.17q.62.37.7 1.17l.59 6.15q.08.8-.72.8H7.3q-.8 0-.68-.79M8.8 12h2.7m-1 5.75H15m-12.25 3.5h18.5");
}

.pnlbaejag {
  cx: 18.75px;
  cy: 4.75px;
  r: 2px;
}
</style><g class="hntgybcog"><path class="jsseqobwf"/><circle class="pnlbaejag"/></g>`,
		"fallback": "iconoven:mesa",
	});
}

export default Component;
