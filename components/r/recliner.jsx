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
		"content": `<style>.dua2ipgah {
  d: path("m3.66 4.34l.93-.43q.91-.41 1.32.5l2.93 6.43q.41.91-.59.91h-1.5q-1 0-1.39-.92L3.14 5.67q-.39-.92.52-1.33");
}

.gqolz8bkb {
  d: path("M5.25 15.25h11m.65-1.62l2.7-1.51q.65-.37.99.3l.32.66q.34.67-.29 1.08l-3.74 2.43q-.63.41-.63-.34v-1.5q0-.75.65-1.12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hqmnlccvr {
  width: 11px;
  height: 9.5px;
  x: 5.25px;
  y: 11.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><path class="dua2ipgah"/><rect class="hqmnlccvr"/><path class="gqolz8bkb"/></g>`,
		"fallback": "iconoven:recliner",
	});
}

export default Component;
