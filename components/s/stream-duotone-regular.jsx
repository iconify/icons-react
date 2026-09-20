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
		"content": `<style>.bj6lsygie {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 6h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.iwx-s0nix {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 18h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jtrmczbpr {
  d: path("M2 6h14");
}

.kg85x_b0m {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 12h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.n_hih6bwb {
  d: path("M2 18h14");
}

.n6amu-bmd {
  d: path("M8 12h14");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="bj6lsygie"/><path class="kg85x_b0m"/><path class="iwx-s0nix"/><path class="jtrmczbpr"/><path class="n6amu-bmd"/><path class="n_hih6bwb"/></g>`,
		"fallback": "iconmind:stream-duotone-regular",
	});
}

export default Component;
