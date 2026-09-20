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
		"content": `<style>.d0q7jt_zp {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m5 15 5 -5 4 4h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gb7yzvvzz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 3v18h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qe97cg-lx {
  d: path("M3 3v18h18");
}

.sfefbpbuh {
  d: path("m5 15 5 -5 4 4h5");
}
</style><g class="nrj6p8qat"><path class="gb7yzvvzz"/><path class="d0q7jt_zp"/><path class="qe97cg-lx"/><path class="sfefbpbuh"/></g>`,
		"fallback": "iconmind:novelty-effect-duotone-regular",
	});
}

export default Component;
