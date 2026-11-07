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

.u9z9l1vet {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 12c4.004-5.997 9.996-5.997 14 0c-4.004 5.997-9.996 5.997-14 0");
}

.urwc3ubqf {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2m2-5c4-6 10-6 14 0c-4 6-10 6-14 0m7 0h.01");
}
</style><g class="ft5dv1b6b"><path class="u9z9l1vet"/><path class="urwc3ubqf"/></g>`,
		"fallback": "coolicons:scan-eye-duotone",
	});
}

export default Component;
