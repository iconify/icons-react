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

.tqffmp7ti {
  stroke-opacity: 0.4;
  d: path("m9 9l6 6m0-6l-6 6");
}

.w66e9pbhz {
  d: path("M3 6V3h3m12 0h3v3m0 12v3h-3M6 21H3v-3m7-15h4m7 7v4m-7 7h-4m-7-7v-4");
}
</style><g class="nrj6p8qat"><path class="tqffmp7ti"/><path class="w66e9pbhz"/></g>`,
		"fallback": "coolicons:square-dashed-close-duocolor-sharp",
	});
}

export default Component;
