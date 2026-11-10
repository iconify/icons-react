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
		"content": `<style>.vbojf1h-d {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 3H22M14 9H22M2 15H22M2 21H22M8.312 2.73L11 5.25L8.284 7.8M11 5.25H3V10");
}
</style><path class="vbojf1h-d"/>`,
		"fallback": "keyline-icons:text-insert-sharp",
	});
}

export default Component;
