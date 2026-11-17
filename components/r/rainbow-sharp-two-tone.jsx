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
		"content": `<style>.tth03cclu {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 20V15C2 9.477 6.477 5 12 5C17.523 5 22 9.477 22 15V20M6 20V15C6 11.686 8.686 9 12 9C15.314 9 18 11.686 18 15V20M10 20V15C10 13.895 10.895 13 12 13C13.105 13 14 13.895 14 15V20");
}
</style><path class="tth03cclu"/>`,
		"fallback": "keyline-icons:rainbow-sharp-two-tone",
	});
}

export default Component;
