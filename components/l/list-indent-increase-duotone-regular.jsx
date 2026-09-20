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
		"content": `<style>.be306ynmy {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 6h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.dj18udbqn {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M10 12h11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.e4mg5wbxb {
  d: path("M3 9.5 5.5 12 3 14.5");
}

.ex75cacie {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 18h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.m383bbtgg {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 9.5 5.5 12 3 14.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tee3b-ble {
  d: path("M10 12h11");
}

.xgrfb-bqu {
  d: path("M3 6h18");
}

.xyj-l9cjp {
  d: path("M3 18h18");
}
</style><g class="nrj6p8qat"><path class="be306ynmy"/><path class="dj18udbqn"/><path class="ex75cacie"/><path class="m383bbtgg"/><path class="xgrfb-bqu"/><path class="tee3b-ble"/><path class="xyj-l9cjp"/><path class="e4mg5wbxb"/></g>`,
		"fallback": "iconmind:list-indent-increase-duotone-regular",
	});
}

export default Component;
