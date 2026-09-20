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
		"content": `<style>.cg-q-7bgo {
  d: path("M16 3v18");
}

.el0n_ccnv {
  d: path("M8 5v14");
}

.h7bcztycq {
  d: path("M12 8v8");
}

.lbz2yq5no {
  d: path("M4 9v6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.om2raabrv {
  d: path("M20 10v4");
}
</style><g class="nrj6p8qat"><path class="lbz2yq5no"/><path class="el0n_ccnv"/><path class="h7bcztycq"/><path class="cg-q-7bgo"/><path class="om2raabrv"/></g>`,
		"fallback": "iconmind:speech-outline-regular",
	});
}

export default Component;
