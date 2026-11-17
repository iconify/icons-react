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

.sjdtbpbtg {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 7a4.243 4.243 0 0 0-6 6ZM4 4l3 3m3 9h.01M13 13h.01M16 10h.01M11 20h.01M14 17h.01M17 14h.01M20 11h.01");
}

.wsea3rb8r {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m13 7l-6 6a4.242 4.242 0 1 1 6-6");
}
</style><g class="ft5dv1b6b"><path class="wsea3rb8r"/><path class="sjdtbpbtg"/></g>`,
		"fallback": "coolicons:shower-duotone",
	});
}

export default Component;
