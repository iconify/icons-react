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
		"content": `<style>.m1xe8jeiw {
  fill: currentColor;
  d: path("M14 7C14 9.20914 12.2091 11 10 11C7.79086 11 6 9.20914 6 7C6 4.79086 7.79086 3 10 3C12.2091 3 14 4.79086 14 7ZM9 13H11C14.866 13 18 16.134 18 20C18 21.1046 17.1046 22 16 22H4C2.89543 22 2 21.1046 2 20C2 16.134 5.13401 13 9 13Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.osom-wbmk {
  d: path("M20 4L17 7L21 7L18 10");
}
</style><g class="nrj6p8qat"><path class="osom-wbmk"/><path class="m1xe8jeiw"/></g>`,
		"fallback": "keyline-icons:user-zap-fill",
	});
}

export default Component;
