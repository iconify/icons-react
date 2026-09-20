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
		"content": `<style>.its1e1bwq {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M5 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nr2-m0biw {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12.5 12H17");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ppivcbbzp {
  d: path("M5 4v16");
}

.prxtjqb7i {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M16.5 9.5 19 12l-2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qd0z4jbov {
  d: path("M16.5 9.5 19 12l-2.5 2.5");
}

.qjej79sen {
  d: path("M12.5 12H17");
}

.t87ohzbeq {
  d: path("M9 4v16");
}

.tqe2jhbja {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="its1e1bwq"/><path class="tqe2jhbja"/><path class="nr2-m0biw"/><path class="prxtjqb7i"/><path class="ppivcbbzp"/><path class="t87ohzbeq"/><path class="qjej79sen"/><path class="qd0z4jbov"/></g>`,
		"fallback": "iconmind:wait-until-duotone-regular",
	});
}

export default Component;
