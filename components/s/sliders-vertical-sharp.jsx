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
		"content": `<style>.qcs0clwsx {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 2L5 13M5 22L5 16M2 16L8 16M12 2L12 10M12 22L12 13M9 10L15 10M19 2L19 11M19 22L19 14M16 14L22 14");
}
</style><path class="qcs0clwsx"/>`,
		"fallback": "keyline-icons:sliders-vertical-sharp",
	});
}

export default Component;
