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
		"content": `<style>.p5akfjbia {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 6C8 4.3431 9.3431 3 11 3L18 3C19.6569 3 21 4.3431 21 6L21 18C21 19.6569 19.6569 21 18 21L6 21C4.3431 21 3 19.6569 3 18L3 11C3 9.8954 3.8954 9 5 9L8 9L8 6ZM8 9L8 18C8 19.4639 6.9434 20.7141 5.5 20.958M12 8L17 8M12 12L17 12M12 16L15 16");
}
</style><path class="p5akfjbia"/>`,
		"fallback": "keyline-icons:newspaper",
	});
}

export default Component;
