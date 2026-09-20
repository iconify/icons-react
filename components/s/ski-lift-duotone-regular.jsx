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
		"content": `<style>.du6c79b-w {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M15 15v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ilk2gccex {
  d: path("M7 8v4");
}

.k2ge1hzsr {
  d: path("M15 15v4");
}

.mtzh0jbte {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M7 8v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qqj79abfc {
  d: path("M13 19v3h4v-3");
}

.uima5nbka {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m3 4 16 16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.v35i90uku {
  d: path("M5 12v3h4v-3");
}

.wh-qznb8e {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M5 12v3h4v-3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xc8jn8_4i {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M13 19v3h4v-3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ywch90sba {
  d: path("m3 4 16 16");
}
</style><g class="nrj6p8qat"><path class="uima5nbka"/><path class="mtzh0jbte"/><path class="wh-qznb8e"/><path class="du6c79b-w"/><path class="xc8jn8_4i"/><path class="ywch90sba"/><path class="ilk2gccex"/><path class="v35i90uku"/><path class="k2ge1hzsr"/><path class="qqj79abfc"/></g>`,
		"fallback": "iconmind:ski-lift-duotone-regular",
	});
}

export default Component;
