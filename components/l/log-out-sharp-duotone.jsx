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
		"content": `<style>.czvjcpgvr {
  stroke-opacity: 0.4;
  d: path("M10 4L3 4L3 20L10 20");
}

.dnkkgirgp {
  d: path("M20.7586 12L9.1093 12M14.8562 6.204L21 12L14.8562 17.796");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="gp_8x1bzb"><path class="czvjcpgvr"/><path class="dnkkgirgp"/></g>`,
		"fallback": "keyline-icons:log-out-sharp-duotone",
	});
}

export default Component;
