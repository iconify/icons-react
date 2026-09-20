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
		"content": `<style>.att80_4qt {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 5h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.n992mnnno {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9 5v8l3 3 3 -3V5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s994z3b0d {
  d: path("M6 5h12");
}

.srdvrnblq {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 16v5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ubojtpbkq {
  d: path("M9 5v8l3 3 3 -3V5");
}

.vhf3_kexp {
  d: path("M12 16v5");
}
</style><g class="nrj6p8qat"><path class="att80_4qt"/><path class="n992mnnno"/><path class="srdvrnblq"/><path class="s994z3b0d"/><path class="ubojtpbkq"/><path class="vhf3_kexp"/></g>`,
		"fallback": "iconmind:pin-duotone-regular",
	});
}

export default Component;
