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

.om2cs-bvl {
  d: path("M13.5 7H19a3 3 0 0 1 3 3v4a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3v-4l3 -3h5.5");
}

.w_jkatblo {
  d: path("M12 7v10");
}
</style><g class="nrj6p8qat"><path class="om2cs-bvl"/><path class="w_jkatblo"/></g>`,
		"fallback": "iconmind:mcp-progress-outline-regular",
	});
}

export default Component;
