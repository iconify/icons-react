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
		"content": `<style>.cyxrc6bac {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 7h10v10H3Z");
}

.ft5dv1b6b {
  fill: none;
}

.xkf0yzo5e {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 7h10v10H3zm3-4v4m4-4v4M8 17v4M20 7l-3 5h4l-3 5");
}
</style><g class="ft5dv1b6b"><path class="cyxrc6bac"/><path class="xkf0yzo5e"/></g>`,
		"fallback": "coolicons:plug-zap-duotone-sharp",
	});
}

export default Component;
