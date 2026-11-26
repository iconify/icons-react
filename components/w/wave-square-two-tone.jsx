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
		"content": `<style>.cl7ogdbvz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 17L6 17C6.5523 17 7 16.5523 7 16L7 8C7 7.4477 7.4477 7 8 7L11 7C11.5523 7 12 7.4477 12 8L12 16C12 16.5523 12.4477 17 13 17L16 17C16.5523 17 17 16.5523 17 16L17 8C17 7.4477 17.4477 7 18 7L22 7");
}
</style><path class="cl7ogdbvz"/>`,
		"fallback": "keyline-icons:wave-square-two-tone",
	});
}

export default Component;
