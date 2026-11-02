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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.r9agv1b8l {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 17a8.944 8.944 0 1 1 16-8Zm-1 4h18m-9-8l4 8");
}

.skzc3acfe {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m20.447 9.894l-16 8a1 1 0 0 1-1.341-.447C.649 12.535 2.641 6.562 7.553 4.106c4.912-2.457 10.885-.465 13.341 4.447a1 1 0 0 1-.447 1.341");
}
</style><g class="ft5dv1b6b"><path class="skzc3acfe"/><path class="r9agv1b8l"/></g>`,
		"fallback": "coolicons:parasol-duotone-sharp",
	});
}

export default Component;
