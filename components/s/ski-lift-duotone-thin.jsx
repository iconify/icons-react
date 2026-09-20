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
		"content": `<style>.bh_xkgblo {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m3 4 16 16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ijf3oxbzk {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M13 19v3h4v-3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ilk2gccex {
  d: path("M7 8v4");
}

.k2ge1hzsr {
  d: path("M15 15v4");
}

.qqj79abfc {
  d: path("M13 19v3h4v-3");
}

.tlud049sb {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M5 12v3h4v-3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.v35i90uku {
  d: path("M5 12v3h4v-3");
}

.wghzt_8kr {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M7 8v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yk4v4q97j {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M15 15v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ywch90sba {
  d: path("m3 4 16 16");
}
</style><g class="hntgybcog"><path class="bh_xkgblo"/><path class="wghzt_8kr"/><path class="tlud049sb"/><path class="yk4v4q97j"/><path class="ijf3oxbzk"/><path class="ywch90sba"/><path class="ilk2gccex"/><path class="v35i90uku"/><path class="k2ge1hzsr"/><path class="qqj79abfc"/></g>`,
		"fallback": "iconmind:ski-lift-duotone-thin",
	});
}

export default Component;
