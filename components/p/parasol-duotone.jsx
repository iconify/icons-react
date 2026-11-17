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

.qv4365oyx {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 17a8.945 8.945 0 0 1 16-8Z");
}

.r9agv1b8l {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 17a8.944 8.944 0 1 1 16-8Zm-1 4h18m-9-8l4 8");
}
</style><g class="ft5dv1b6b"><path class="qv4365oyx"/><path class="r9agv1b8l"/></g>`,
		"fallback": "coolicons:parasol-duotone",
	});
}

export default Component;
