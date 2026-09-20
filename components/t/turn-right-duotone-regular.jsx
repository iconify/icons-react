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
		"content": `<style>.eki_s5bnj {
  d: path("m14 6 3 3 -3 3");
}

.kgyvi50al {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m14 6 3 3 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.le0g-d6db {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 21V9h9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.prbs3ccnp {
  d: path("M8 21V9h9");
}
</style><g class="nrj6p8qat"><path class="le0g-d6db"/><path class="kgyvi50al"/><path class="prbs3ccnp"/><path class="eki_s5bnj"/></g>`,
		"fallback": "iconmind:turn-right-duotone-regular",
	});
}

export default Component;
