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
		"content": `<style>.tv611yb-p {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3.7071 20.2929L19.8243 4.1757M13 4L20 4L20 11");
}
</style><path class="tv611yb-p"/>`,
		"fallback": "keyline-icons:move-up-right-sharp-duotone",
	});
}

export default Component;
