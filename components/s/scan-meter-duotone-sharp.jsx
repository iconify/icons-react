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

.rllw3dbgp {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 7V3h4m10 0h4v4m0 10v4h-4M7 21H3v-4m3-7h12v4H6Zm4 0v4m4-4v4");
}

.tn10mqble {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6 10h12v4H6Z");
}
</style><g class="ft5dv1b6b"><path class="tn10mqble"/><path class="rllw3dbgp"/></g>`,
		"fallback": "coolicons:scan-meter-duotone-sharp",
	});
}

export default Component;
