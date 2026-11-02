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
		"content": `<style>.dctk2rj5c {
  d: path("M5 5h7v5H5z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tv4vg2bhr {
  stroke-opacity: 0.4;
  d: path("M12 14h7v5h-7z");
}
</style><g class="nrj6p8qat"><path class="tv4vg2bhr"/><path class="dctk2rj5c"/></g>`,
		"fallback": "coolicons:ungroup-duocolor-sharp",
	});
}

export default Component;
