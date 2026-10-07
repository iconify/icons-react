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
		"content": `<style>.l_bfuvq9s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 6L4 5C4 3.8954 4.8954 3 6 3L18 3C19.1046 3 20 3.8954 20 5L20 6M12 3L12 21M8 21L16 21");
}
</style><path class="l_bfuvq9s"/>`,
		"fallback": "keyline-icons:type-two-tone",
	});
}

export default Component;
