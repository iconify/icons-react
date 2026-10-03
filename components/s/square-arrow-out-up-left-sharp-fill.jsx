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
		"content": `<style>.nov4-jb9h {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 7L21 7L21 21L7 21L7 14M11.2929 11.2929L3.1464 3.1464M12 3L3 3L3 12");
}
</style><path class="nov4-jb9h"/>`,
		"fallback": "keyline-icons:square-arrow-out-up-left-sharp-fill",
	});
}

export default Component;
