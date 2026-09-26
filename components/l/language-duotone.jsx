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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t2xsfxbbz {
  stroke-opacity: 0.4;
  d: path("M12 15L22 15M14 15C14.4767 16.1439 15.5203 18.0076 17 19.543C18.1074 20.6922 19.459 21.6576 21 22M20 15C19.5234 16.1439 18.4797 18.0076 17 19.543C15.8926 20.6922 14.541 21.6576 13 22M16 11L18 11");
}

.ydewsccpi {
  d: path("M2 11L6 2L10 11M3.3333 8L8.6667 8");
}
</style><g class="nrj6p8qat"><path class="ydewsccpi"/><path class="t2xsfxbbz"/></g>`,
		"fallback": "keyline-icons:language-duotone",
	});
}

export default Component;
