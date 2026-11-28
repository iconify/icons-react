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
		"content": `<style>.fk7obbb6p {
  d: path("M12 3V8H21M3 3H21V21H3V3Z");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.hz_ux95at {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M21 3H12V8H21V3Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path clip-rule="evenodd" class="hz_ux95at"/><path class="fk7obbb6p"/></g>`,
		"fallback": "keyline-icons:tab-sharp-fill",
	});
}

export default Component;
