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
		"content": `<style>.ioilxfbca {
  d: path("M14.5 6.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.lcr-tiaxf {
  d: path("M9.5 16a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.mzsthfbrb {
  fill: currentColor;
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nzpsuduik {
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.rvcsluzlj {
  fill: currentColor;
  d: path("M9.5 16a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.tcxfk34nj {
  d: path("M7 8a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.vb4q6bcxh {
  fill: currentColor;
  d: path("M14.5 6.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.yc_5gkigy {
  fill: currentColor;
  d: path("M7 8a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="mzsthfbrb"/><path class="yc_5gkigy"/><path class="vb4q6bcxh"/><path class="rvcsluzlj"/><path class="nzpsuduik"/><path class="tcxfk34nj"/><path class="ioilxfbca"/><path class="lcr-tiaxf"/></g>`,
		"fallback": "iconmind:sparsity-duotone-regular",
	});
}

export default Component;
