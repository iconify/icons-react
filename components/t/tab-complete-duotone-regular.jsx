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
		"content": `<style>.b6szz2b6j {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M16.5 13.5 19 16l-2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.be306ynmy {
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

.elwkggrsn {
  d: path("M22 13.5v5");
}

.gar666bgi {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M22 13.5v5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jn0zvwb6e {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 16h9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k0js09kko {
  d: path("M3 16h9");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qouhnhnfp {
  d: path("M15 16h4");
}

.t40-rxb9c {
  d: path("M16.5 13.5 19 16l-2.5 2.5");
}

.wykgeg31p {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M15 16h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xgrfb-bqu {
  d: path("M3 6h18");
}
</style><g class="nrj6p8qat"><path class="be306ynmy"/><path class="digwvcbca"/><path class="jn0zvwb6e"/><path class="wykgeg31p"/><path class="b6szz2b6j"/><path class="gar666bgi"/><path class="xgrfb-bqu"/><path class="d8abqfbpc"/><path class="k0js09kko"/><path class="qouhnhnfp"/><path class="t40-rxb9c"/><path class="elwkggrsn"/></g>`,
		"fallback": "iconmind:tab-complete-duotone-regular",
	});
}

export default Component;
