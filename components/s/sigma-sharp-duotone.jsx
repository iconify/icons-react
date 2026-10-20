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
		"content": `<style>.u5hxxbcun {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 3L6 3L12 12L6 21L19 21");
}
</style><path class="u5hxxbcun"/>`,
		"fallback": "keyline-icons:sigma-sharp-duotone",
	});
}

export default Component;
