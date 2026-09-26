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
		"content": `<style>.k9kgs3l3x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 3L5 12M5 21L5 16M3 16L7 16M12 3L12 10M12 21L12 14M10 10L14 10M19 3L19 10M19 21L19 14M17 14L21 14");
}
</style><path class="k9kgs3l3x"/>`,
		"fallback": "keyline-icons:sliders-vertical-fill",
	});
}

export default Component;
