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
		"content": `<style>.b9tjfr4en {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 10v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.crv4i00bu {
  d: path("M4 3v18");
}

.g50hmjb5n {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m9 7 3 3 3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.icvc39peu {
  d: path("m9 7 3 3 3 -3");
}

.lulmb9b1a {
  d: path("M4 4h16v12H4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qlvopac9f {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 3v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qnvjj7b8l {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 4h16v12H4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xios20bld {
  d: path("M12 10v3");
}
</style><g class="nrj6p8qat"><path class="qlvopac9f"/><path class="qnvjj7b8l"/><path class="g50hmjb5n"/><path class="b9tjfr4en"/><path class="crv4i00bu"/><path class="lulmb9b1a"/><path class="icvc39peu"/><path class="xios20bld"/></g>`,
		"fallback": "iconmind:milestone-filter-duotone-regular",
	});
}

export default Component;
