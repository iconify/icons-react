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
		"content": `<style>.fajy6kjai {
  d: path("M2 6.8477L12 12M12 12L22 6.8477M12 12L12 22M7 4.4239L17 9.4239M12 2L22 6.8477L22 17.1523L12 22L2 17.1523L2 6.8477L12 2Z");
}

.g5-8adpwj {
  fill: currentColor;
  d: path("M22 6.8477L22 17.1523L12 22L2 17.1523L2 6.8477L12 12L22 6.8477Z");
  stroke: none;
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="gp_8x1bzb"><path class="g5-8adpwj"/><path class="fajy6kjai"/></g>`,
		"fallback": "keyline-icons:package-sharp-fill",
	});
}

export default Component;
