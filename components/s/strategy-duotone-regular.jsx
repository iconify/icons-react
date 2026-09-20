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
		"content": `<style>.aeyekmbly {
  d: path("M3 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.axr3xwb0d {
  d: path("m7 17 4 -4");
}

.cn1mb64lb {
  d: path("M11 13h4");
}

.d-pkjcbkz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m15 13 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ea-0-0byy {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M19 5v4h-4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hyzw0ct0o {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M11 13h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jhhozmbca {
  d: path("M19 5v4h-4");
}

.jz9jnbbik {
  fill: currentColor;
  d: path("M3 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.k8p0vfjci {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m7 17 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r1wy_ibgj {
  d: path("m15 13 4 -4");
}
</style><g class="nrj6p8qat"><path class="jz9jnbbik"/><path class="k8p0vfjci"/><path class="hyzw0ct0o"/><path class="d-pkjcbkz"/><path class="ea-0-0byy"/><path class="aeyekmbly"/><path class="axr3xwb0d"/><path class="cn1mb64lb"/><path class="r1wy_ibgj"/><path class="jhhozmbca"/></g>`,
		"fallback": "iconmind:strategy-duotone-regular",
	});
}

export default Component;
