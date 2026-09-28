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
		"content": `<style>.q46pylvbf {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 17L21 17L21 3L7 3L7 10M2.7071 21.2929L10.8536 13.1464M2 13L11 13L11 22");
}
</style><path class="q46pylvbf"/>`,
		"fallback": "keyline-icons:square-arrow-in-up-right-sharp-fill",
	});
}

export default Component;
