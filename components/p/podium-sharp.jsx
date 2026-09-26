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
		"content": `<style>.tr4a1nbdn {
  fill: none;
  stroke: currentColor;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M1 17.25L23 17.25M4 17.25L4 13.75L9 13.75L9 10.25L14 10.25L14 6.75L20 6.75L20 17.25L4 17.25Z");
}
</style><path class="tr4a1nbdn"/>`,
		"fallback": "keyline-icons:podium-sharp",
	});
}

export default Component;
