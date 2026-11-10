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
		"content": `<style>.uw09byb_p {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.312 1.73L12 4.25L9.284 6.8M12 4.25H4V10M9 22V11H20V22H9Z");
}
</style><path class="uw09byb_p"/>`,
		"fallback": "keyline-icons:rotate-cw-square-sharp",
	});
}

export default Component;
