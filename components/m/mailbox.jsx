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
		"content": `<style>.mw0rk7b2a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 4H17C19.7614 4 22 6.24 22 9V17C22 17.55 21.5523 18 21 18H11M7 4C4.2386 4 2 6.24 2 9V17C2 17.55 2.4477 18 3 18H11M7 4C9.7614 4 12 6.24 12 9V17C12 17.55 11.5523 18 11 18M6 9H8M12 18V20");
}
</style><path class="mw0rk7b2a"/>`,
		"fallback": "keyline-icons:mailbox",
	});
}

export default Component;
