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
		"content": `<style>.mzs9lvbbs {
  d: path("M19.5 4v16");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pf60eubcf {
  d: path("M11.32 7a5.5 5.5 0 1 1 -4.64 0");
}

.vstmlot4z {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M11.32 7a5.5 5.5 0 1 1 -4.64 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.x7ee0pdlp {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M19.5 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="vstmlot4z"/><path class="x7ee0pdlp"/><path class="pf60eubcf"/><path class="mzs9lvbbs"/></g>`,
		"fallback": "iconmind:stuck-agent-duotone-regular",
	});
}

export default Component;
