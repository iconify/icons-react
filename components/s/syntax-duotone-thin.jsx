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
		"content": `<style>.fa2e7y2tg {
  d: path("M4 17h8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kr1fheb9m {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8 4 4 8l4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nt1stnb3c {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M15 17h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qeku75bzq {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 17h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.upjy9--jw {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m16 4 4 4 -4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vj8si9dha {
  d: path("m16 4 4 4 -4 4");
}

.wfg0vmbgy {
  d: path("M15 17h5");
}

.zaau21ski {
  d: path("M8 4 4 8l4 4");
}
</style><g class="hntgybcog"><path class="kr1fheb9m"/><path class="upjy9--jw"/><path class="qeku75bzq"/><path class="nt1stnb3c"/><path class="zaau21ski"/><path class="vj8si9dha"/><path class="fa2e7y2tg"/><path class="wfg0vmbgy"/></g>`,
		"fallback": "iconmind:syntax-duotone-thin",
	});
}

export default Component;
