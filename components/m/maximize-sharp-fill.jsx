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
		"content": `<style>.rv7didcvx {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 3L3 3L3 10M14 3L21 3L21 10M21 14L21 21L14 21M3 14L3 21L10 21");
}
</style><path class="rv7didcvx"/>`,
		"fallback": "keyline-icons:maximize-sharp-fill",
	});
}

export default Component;
