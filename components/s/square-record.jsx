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
		"content": `<style>.kpe77fbfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 6C3 4.343146 4.343146 3 6 3L18 3C19.656854 3 21 4.343146 21 6L21 18C21 19.656854 19.656854 21 18 21L6 21C4.343146 21 3 19.656854 3 18ZM16 12C16 14.2091 14.2091 16 12 16C9.7909 16 8 14.2091 8 12C8 9.7909 9.7909 8 12 8C14.2091 8 16 9.7909 16 12Z");
}
</style><path class="kpe77fbfx"/>`,
		"fallback": "keyline-icons:square-record",
	});
}

export default Component;
