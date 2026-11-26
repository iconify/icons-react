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
		"content": `<style>.haq_scbvq {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M13 7C13 9.2091 11.2091 11 9 11C6.7909 11 5 9.2091 5 7C5 4.7909 6.7909 3 9 3C11.2091 3 13 4.7909 13 7ZM8 13L10 13C13.866 13 17 16.134 17 20C17 21.1046 16.1046 22 15 22L3 22C1.8954 22 1 21.1046 1 20C1 16.134 4.134 13 8 13Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rv3tpiqjr {
  d: path("M16 7H22M19 4L22 7L19 10");
}
</style><g class="nrj6p8qat"><path clip-rule="evenodd" class="haq_scbvq"/><path class="rv3tpiqjr"/></g>`,
		"fallback": "keyline-icons:user-arrow-right-fill",
	});
}

export default Component;
