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
		"content": `<style>.acx2mjbnt {
  d: path("M12 11v6");
}

.gwny-o4ct {
  d: path("M2 20V6h7l2 2h11v12Z");
}

.ikiprn9sq {
  d: path("M9 14h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rd3_-g5sv {
  fill: currentColor;
  d: path("M2 20V6h7l2 2h11v12Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="rd3_-g5sv"/><path class="gwny-o4ct"/><path class="acx2mjbnt"/><path class="ikiprn9sq"/></g>`,
		"fallback": "iconmind:medical-record-duotone-regular",
	});
}

export default Component;
