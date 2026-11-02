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
		"content": `<style>.ihk9poypq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m4 10l5-5a6.364 6.364 0 0 1 9 9l-5 5a4.243 4.243 0 0 1-6-6l5-5a2.121 2.121 0 1 1 3 3l-4 4");
}
</style><path class="ihk9poypq"/>`,
		"fallback": "coolicons:paperclip-duocolor-round",
	});
}

export default Component;
