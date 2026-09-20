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
		"content": `<style>.dowigunfv {
  fill: currentColor;
  d: path("M13.5 6a2 2 0 0 1 2 -2H20a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-4.5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.gev0055ej {
  d: path("M13.5 6a2 2 0 0 1 2 -2H20a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-4.5a2 2 0 0 1 -2 -2Z");
}

.jnfz-wh9g {
  d: path("M13.5 9H22");
}

.liom1epye {
  d: path("M2 6a2 2 0 0 1 2 -2h4.5a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.m61z8ufvi {
  d: path("M2 9h8.5");
}

.n10kxpbvp {
  d: path("M15.5 14.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.svy0e-5io {
  fill: currentColor;
  d: path("M15.5 14.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.trhmp3bpf {
  fill: currentColor;
  d: path("M2 6a2 2 0 0 1 2 -2h4.5a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="trhmp3bpf"/><path class="dowigunfv"/><path class="svy0e-5io"/><path class="liom1epye"/><path class="m61z8ufvi"/><path class="gev0055ej"/><path class="jnfz-wh9g"/><path class="n10kxpbvp"/></g>`,
		"fallback": "iconmind:schema-diff-duotone-regular",
	});
}

export default Component;
