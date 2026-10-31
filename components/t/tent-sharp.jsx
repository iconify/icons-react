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
		"content": `<style>.i849rozpt {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 21L12 3L21 21M1 21L23 21M12 3L12 21M12 13L16 21");
}
</style><path class="i849rozpt"/>`,
		"fallback": "keyline-icons:tent-sharp",
	});
}

export default Component;
