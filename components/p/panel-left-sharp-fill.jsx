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
		"content": `<style>.a6gbf1frc {
  fill: currentColor;
  d: path("M3 3L9 3L9 21L3 21L3 3Z");
  stroke: none;
}

.fk_q5-bmc {
  d: path("M3 3L21 3L21 21L3 21L3 3ZM9 3L9 21");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="gp_8x1bzb"><path class="a6gbf1frc"/><path class="fk_q5-bmc"/></g>`,
		"fallback": "keyline-icons:panel-left-sharp-fill",
	});
}

export default Component;
