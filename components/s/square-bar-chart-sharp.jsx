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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.x-_5ilohg {
  d: path("M3 3L21 3L21 21L3 21L3 3Z");
}

.zke4u354c {
  d: path("M8 9.6667L8 17M12 7L12 17M16 12.3333L16 17");
}
</style><g class="gp_8x1bzb"><path class="x-_5ilohg"/><path class="zke4u354c"/></g>`,
		"fallback": "keyline-icons:square-bar-chart-sharp",
	});
}

export default Component;
