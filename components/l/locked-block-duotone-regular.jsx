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
		"content": `<style>.d6cu3qpew {
  d: path("M17 3h4v18h-4");
}

.kcomyoe5y {
  d: path("M9 12h6v3H9Z");
}

.ldodvk1_f {
  d: path("M7 3H3v18h4");
}

.lhus_vb3v {
  d: path("M10.5 12a1.5 1.5 0 0 1 3 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s_z-4bu9m {
  fill: currentColor;
  d: path("M9 12h6v3H9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="s_z-4bu9m"/><path class="ldodvk1_f"/><path class="d6cu3qpew"/><path class="kcomyoe5y"/><path class="lhus_vb3v"/></g>`,
		"fallback": "iconmind:locked-block-duotone-regular",
	});
}

export default Component;
