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
		"content": `<style>.bw_to0b8d {
  d: path("M7 12h12");
}

.iulb4mb6k {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 20h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.pd-i35blz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.prxtjqb7i {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M16.5 9.5 19 12l-2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qd0z4jbov {
  d: path("M16.5 9.5 19 12l-2.5 2.5");
}

.r3faxubne {
  d: path("M4 4v16");
}

.ug-yr5rhi {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M7 12h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="pd-i35blz"/><path class="iulb4mb6k"/><path class="ug-yr5rhi"/><path class="prxtjqb7i"/><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="bw_to0b8d"/><path class="qd0z4jbov"/></g>`,
		"fallback": "iconmind:remote-write-duotone-regular",
	});
}

export default Component;
