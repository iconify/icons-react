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
		"content": `<style>.fkh690d9e {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 21H22M14 15H22M2 9H22M2 3H22M8.312 21.27L11 18.75L8.284 16.2M11 18.75H3V14");
}
</style><path class="fkh690d9e"/>`,
		"fallback": "keyline-icons:text-append-sharp",
	});
}

export default Component;
