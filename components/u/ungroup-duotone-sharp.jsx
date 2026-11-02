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
		"content": `<style>.bc6akkb6o {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 5v5H5V5Zm7 9v5h-7v-5Z");
}

.ft5dv1b6b {
  fill: none;
}

.z2c-hu7is {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 5h7v5H5zm7 9h7v5h-7z");
}
</style><g class="ft5dv1b6b"><path class="bc6akkb6o"/><path class="z2c-hu7is"/></g>`,
		"fallback": "coolicons:ungroup-duotone-sharp",
	});
}

export default Component;
