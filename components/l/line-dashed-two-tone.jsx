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
		"content": `<style>.sm5dqubvs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 12L4 12M8 12L10 12M14 12L16 12M20 12L22 12");
}
</style><path class="sm5dqubvs"/>`,
		"fallback": "keyline-icons:line-dashed-two-tone",
	});
}

export default Component;
