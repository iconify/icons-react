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
		"content": `<style>.fhluz1bdh {
  d: path("M11 12h5");
}

.i6r7zygac {
  d: path("M8 16a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.k08v31p7k {
  fill: currentColor;
  d: path("M8 16a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.lblndgb4u {
  fill: currentColor;
  d: path("M13 3H6v18h12V8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.lgr612izs {
  d: path("M8 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tks4a4biu {
  d: path("M13 3H6v18h12V8Z");
}

.wwnijrnro {
  fill: currentColor;
  d: path("M8 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.wyp7k2b7p {
  d: path("M11 16h5");
}
</style><g class="nrj6p8qat"><path class="lblndgb4u"/><path class="wwnijrnro"/><path class="k08v31p7k"/><path class="tks4a4biu"/><path class="lgr612izs"/><path class="fhluz1bdh"/><path class="i6r7zygac"/><path class="wyp7k2b7p"/></g>`,
		"fallback": "iconmind:manifest-file-duotone-regular",
	});
}

export default Component;
