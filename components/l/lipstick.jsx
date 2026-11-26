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
		"content": `<style>.qge2lab0q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16 14L16 6.0028C16 5.6241 15.7862 5.278 15.4476 5.1085L9.4475 2.1057C9.3086 2.0362 9.1554 2 9 2C8.4477 2 8 2.4477 8 3L8 14C8 14.5523 7.5523 15 7 15C6.4477 15 6 15.4477 6 16L6 20C6 21.1046 6.8954 22 8 22L16 22C17.1046 22 18 21.1046 18 20L18 16C18 15.4477 17.5523 15 17 15C16.4477 15 16 14.5523 16 14ZM16 11L8 11");
}
</style><path class="qge2lab0q"/>`,
		"fallback": "keyline-icons:lipstick",
	});
}

export default Component;
