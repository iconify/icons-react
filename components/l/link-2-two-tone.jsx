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
		"content": `<style>.dygl0op_e {
  d: path("M8 12L16 12");
}

.hivju0bye {
  stroke-opacity: 0.4;
  d: path("M9 17L7 17C4.2386 17 2 14.7614 2 12C2 9.2386 4.2386 7 7 7L9 7M15 7L17 7C19.7614 7 22 9.2386 22 12C22 14.7614 19.7614 17 17 17L15 17");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="hivju0bye"/><path class="dygl0op_e"/></g>`,
		"fallback": "keyline-icons:link-2-two-tone",
	});
}

export default Component;
