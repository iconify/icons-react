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
		"content": `<style>.zl5ni9bgm {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 3L14.7896 9.2104L21 12L14.7896 14.7896L12 21L9.2104 14.7896L3 12L9.2104 9.2104L12 3Z");
}
</style><path class="zl5ni9bgm"/>`,
		"fallback": "keyline-icons:sparkle-sharp-duotone",
	});
}

export default Component;
