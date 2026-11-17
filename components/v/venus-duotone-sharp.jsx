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

.n_sj1zbhu {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 13a5 5 0 1 1 .001-10.001A5 5 0 0 1 12 13");
}

.xafi2hben {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 8a5 5 0 1 0 10 0A5 5 0 0 0 7 8m5 5v8m-3-4h6");
}
</style><g class="ft5dv1b6b"><path class="n_sj1zbhu"/><path class="xafi2hben"/></g>`,
		"fallback": "coolicons:venus-duotone-sharp",
	});
}

export default Component;
