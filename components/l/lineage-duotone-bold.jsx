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
		"content": `<style>.f9dxs-uic {
  d: path("m12 12 4 4h5");
}

.g17cbzb4k {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 12h6l4 -4h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nc_oqxx1a {
  d: path("M6 12h6l4 -4h5");
}

.rsea1pbos {
  fill: currentColor;
  d: path("M2 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.u9pzu7lwn {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m12 12 4 4h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zuquf0b8s {
  d: path("M2 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="s0phu2bbs"><path class="rsea1pbos"/><path class="g17cbzb4k"/><path class="u9pzu7lwn"/><path class="zuquf0b8s"/><path class="nc_oqxx1a"/><path class="f9dxs-uic"/></g>`,
		"fallback": "iconmind:lineage-duotone-bold",
	});
}

export default Component;
