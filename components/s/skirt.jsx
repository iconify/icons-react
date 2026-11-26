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
		"content": `<style>.p-7wvsbsn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18 8V5C18 4.4477 17.5523 4 17 4H7C6.4477 4 6 4.4477 6 5V8M18 8L21.8462 17.2308C21.9478 17.4745 22 17.736 22 18C22 19.1046 21.1046 20 20 20H15.6667M18 8H14M15.6667 20H8.3333M15.6667 20L14 8M8.3333 20H4C2.8954 20 2 19.1046 2 18C2 17.736 2.0522 17.4745 2.1538 17.2308L6 8M8.3333 20L10 8M6 8H10M10 8H14");
}
</style><path class="p-7wvsbsn"/>`,
		"fallback": "keyline-icons:skirt",
	});
}

export default Component;
