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
		"content": `<style>.crv4i00bu {
  d: path("M4 3v18");
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

.xios20bld {
  d: path("M12 10v3");
}
</style><g class="nrj6p8qat"><path class="crv4i00bu"/><path class="lulmb9b1a"/><path class="icvc39peu"/><path class="xios20bld"/></g>`,
		"fallback": "iconmind:milestone-filter-outline-regular",
	});
}

export default Component;
