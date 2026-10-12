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
		"content": `<style>.nfx4_85fp {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4.1757 19.8243L19.8243 4.1757M13 4L20 4L20 11M11 20L4 20L4 13");
}
</style><path class="nfx4_85fp"/>`,
		"fallback": "keyline-icons:move-diagonal-sharp-two-tone",
	});
}

export default Component;
