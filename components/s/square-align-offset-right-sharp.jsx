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
		"content": `<style>.abjx4fbtp {
  d: path("M21 3L21 21L3 21L3 3L21 3Z");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.watbwr0lo {
  d: path("M16 7L16 14M8 13L8 17M12 17L12 8");
}
</style><g class="gp_8x1bzb"><path class="abjx4fbtp"/><path class="watbwr0lo"/></g>`,
		"fallback": "keyline-icons:square-align-offset-right-sharp",
	});
}

export default Component;
