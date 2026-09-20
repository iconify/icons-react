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

.d8abqfbpc {
  d: path("M3 11h18");
}

.digwvcbca {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 11h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.h-tbmj14o {
  d: path("M6 17h15");
}

.kf0kkac5a {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 17h15");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ltkkdtbvf {
  d: path("M8.5 14.5 6 17l2.5 2.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xgrfb-bqu {
  d: path("M3 6h18");
}

.y902iobxy {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8.5 14.5 6 17l2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="be306ynmy"/><path class="digwvcbca"/><path class="kf0kkac5a"/><path class="y902iobxy"/><path class="xgrfb-bqu"/><path class="d8abqfbpc"/><path class="h-tbmj14o"/><path class="ltkkdtbvf"/></g>`,
		"fallback": "iconmind:rtl-duotone-regular",
	});
}

export default Component;
