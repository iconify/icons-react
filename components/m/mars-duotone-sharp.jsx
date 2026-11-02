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
		"content": `<style>.en-mfniip {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 16a5 5 0 1 0 10 0a5 5 0 0 0-10 0m9-4l9-9m-6 0h6v6");
}

.ft5dv1b6b {
  fill: none;
}

.nq8xyrg4z {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M2.472 13.664a6.001 6.001 0 1 1 11.055 4.674a6.001 6.001 0 0 1-11.055-4.674");
}
</style><g class="ft5dv1b6b"><path class="nq8xyrg4z"/><path class="en-mfniip"/></g>`,
		"fallback": "coolicons:mars-duotone-sharp",
	});
}

export default Component;
