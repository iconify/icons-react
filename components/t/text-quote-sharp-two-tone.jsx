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
		"content": `<style>.c5ibfrbgs {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 5L17 5M3 11L3 20M6 12L22 12M6 19L22 19");
}
</style><path class="c5ibfrbgs"/>`,
		"fallback": "keyline-icons:text-quote-sharp-two-tone",
	});
}

export default Component;
