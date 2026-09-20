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
		"content": `<style>.al6h6yb3y {
  d: path("m2 18 2 2 2 -2");
}

.eu9kkgbdm {
  d: path("M9 12h12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r3faxubne {
  d: path("M4 4v16");
}

.sxy07wbdf {
  d: path("M9 7h12");
}

.weza57brb {
  d: path("m2 6 2 -2 2 2");
}

.x3jqftbaj {
  d: path("M9 17h12");
}
</style><g class="nrj6p8qat"><path class="sxy07wbdf"/><path class="eu9kkgbdm"/><path class="x3jqftbaj"/><path class="r3faxubne"/><path class="weza57brb"/><path class="al6h6yb3y"/></g>`,
		"fallback": "iconmind:reorder-outline-regular",
	});
}

export default Component;
