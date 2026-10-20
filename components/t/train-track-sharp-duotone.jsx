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
		"content": `<style>.c07sruk-c {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.2279 2.3162L2.7721 21.6838M14.7721 2.3162L21.2279 21.6838M5 6L19 6M3 12L21 12M1 18L23 18");
}
</style><path class="c07sruk-c"/>`,
		"fallback": "keyline-icons:train-track-sharp-duotone",
	});
}

export default Component;
