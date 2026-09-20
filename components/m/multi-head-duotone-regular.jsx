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
		"content": `<style>.d8c5u6bor {
  d: path("M7 3v5");
}

.jc5wb8hwy {
  d: path("m12 11 4 4 -4 4 -4 -4Z");
}

.jtwp3absz {
  fill: currentColor;
  d: path("m12 11 4 4 -4 4 -4 -4Z");
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

.phg4z53le {
  d: path("M17 3v5");
}

.uvgrx_yvv {
  d: path("M12 3v5");
}
</style><g class="nrj6p8qat"><path class="jtwp3absz"/><path class="d8c5u6bor"/><path class="uvgrx_yvv"/><path class="phg4z53le"/><path class="jc5wb8hwy"/></g>`,
		"fallback": "iconmind:multi-head-duotone-regular",
	});
}

export default Component;
