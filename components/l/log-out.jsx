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
		"content": `<style>.yo53oob9a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 4L7 4C4.7909 4 3 5.7909 3 8L3 16C3 18.2091 4.7909 20 7 20L9 20M20.2307 12L10.1093 12M15.17 6.5L20.8359 11.6314C21.0547 11.8296 21.0547 12.1704 20.8359 12.3686L15.17 17.5");
}
</style><path class="yo53oob9a"/>`,
		"fallback": "keyline-icons:log-out",
	});
}

export default Component;
