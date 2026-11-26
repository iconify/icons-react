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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ie42d9bfu {
  d: path("M2 3L2 21M22 3L22 21");
}

.w05p-xtrj {
  stroke-opacity: 0.4;
  d: path("M6.928 18.6273L12 6L17.072 18.6273M9.188 13L14.812 13");
}
</style><g class="gp_8x1bzb"><path class="w05p-xtrj"/><path class="ie42d9bfu"/></g>`,
		"fallback": "keyline-icons:letter-spacing-sharp-duotone",
	});
}

export default Component;
