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
		"content": `<style>.eqp6688go {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.5 10L5.5 6.5C5.5 4.0147 7.5147 2 10 2C12.4853 2 14.5 4.0147 14.5 6.5L14.5 7M9.5 10L5 10C3.3431 10 2 11.3431 2 13L2 19C2 20.6569 3.3431 22 5 22L8.5 22M22 16.5C22 19.5376 19.5376 22 16.5 22C13.4624 22 11 19.5376 11 16.5C11 13.4624 13.4624 11 16.5 11C19.5376 11 22 13.4624 22 16.5ZM16 15.1L16 17L17.9 17");
}
</style><path class="eqp6688go"/>`,
		"fallback": "keyline-icons:lock-clock",
	});
}

export default Component;
