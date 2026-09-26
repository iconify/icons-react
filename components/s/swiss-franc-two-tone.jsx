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
		"content": `<style>.d7fm4ccbv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18 2L9 2L9 22M9 11L16 11M6 16L14 16");
}
</style><path class="d7fm4ccbv"/>`,
		"fallback": "keyline-icons:swiss-franc-two-tone",
	});
}

export default Component;
