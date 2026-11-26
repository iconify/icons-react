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
		"content": `<style>.o-bydbqqy {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 5L22 5L22 10L16.0001 12L14 19L10 19L7.9999 12L2 10Z");
}
</style><path class="o-bydbqqy"/>`,
		"fallback": "keyline-icons:underwear-sharp-duotone",
	});
}

export default Component;
