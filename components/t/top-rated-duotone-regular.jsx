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
		"content": `<style>.adxensbci {
  d: path("M12 2a6.5 6.5 0 1 1 0 13 6.5 6.5 0 1 1 0 -13M9.5 14.5V22l2.5 -2.5 2.5 2.5v-7.5");
}

.aindk3bza {
  d: path("M12 5.5v6");
}

.bu8o4wyhb {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 5.5v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.h8-owobfd {
  d: path("m10 7.5 2 -2");
}

.lsng_0odv {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 2a6.5 6.5 0 1 1 0 13 6.5 6.5 0 1 1 0 -13M9.5 14.5V22l2.5 -2.5 2.5 2.5v-7.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nnxohdiqp {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m10 7.5 2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="lsng_0odv"/><path class="bu8o4wyhb"/><path class="nnxohdiqp"/><path class="adxensbci"/><path class="aindk3bza"/><path class="h8-owobfd"/></g>`,
		"fallback": "iconmind:top-rated-duotone-regular",
	});
}

export default Component;
