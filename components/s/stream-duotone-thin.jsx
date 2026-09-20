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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jtrmczbpr {
  d: path("M2 6h14");
}

.juj9_pbrn {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 18h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.n_hih6bwb {
  d: path("M2 18h14");
}

.n6amu-bmd {
  d: path("M8 12h14");
}

.nv0ksacrz {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8 12h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pq8_vobtx {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 6h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="pq8_vobtx"/><path class="nv0ksacrz"/><path class="juj9_pbrn"/><path class="jtrmczbpr"/><path class="n6amu-bmd"/><path class="n_hih6bwb"/></g>`,
		"fallback": "iconmind:stream-duotone-thin",
	});
}

export default Component;
