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
		"content": `<style>.vkkuh9ebd {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 2L18 2L9 2L9 22L9 23M8 11L9 11L16 11L17 11M5 16L6 16L14 16L15 16");
}
</style><path class="vkkuh9ebd"/>`,
		"fallback": "keyline-icons:swiss-franc-sharp",
	});
}

export default Component;
