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

.lwb64wb6o {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M11 18a2.83 2.83 0 0 1-4 0l-2-2a2.83 2.83 0 0 1 0-4h12Zm8-2c1 1 2 2 2 3a2 2 0 1 1-4 0c0-1 1-2 2-3");
}

.t489-g_vt {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m11 6l6 6l-6 6a2.83 2.83 0 0 1-4 0l-2-2a2.83 2.83 0 0 1 0-4zM8 3l3 3m-6 6h12m4 7a2 2 0 1 1-4 0c0-1 1-2 2-3c1 1 2 2 2 3");
}
</style><g class="ft5dv1b6b"><path class="lwb64wb6o"/><path class="t489-g_vt"/></g>`,
		"fallback": "coolicons:paint-bucket-duotone-round",
	});
}

export default Component;
