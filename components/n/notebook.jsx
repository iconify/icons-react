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
		"content": `<style>.e1u4pdb-q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 5C5 3.3431 6.3431 2 8 2L18 2C19.6569 2 21 3.3431 21 5L21 19C21 20.6569 19.6569 22 18 22L8 22C6.3431 22 5 20.6569 5 19L5 5ZM3 7L7 7M3 12L7 12M3 17L7 17M17 6L17 18");
}
</style><path class="e1u4pdb-q"/>`,
		"fallback": "keyline-icons:notebook",
	});
}

export default Component;
