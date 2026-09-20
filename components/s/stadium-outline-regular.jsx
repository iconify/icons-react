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
		"content": `<style>.niggb1byh {
  d: path("M8 10h8v4H8Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tlag47v4y {
  d: path("M12 4c6 0 10 3 10 8s-4 8 -10 8 -10 -3 -10 -8 4 -8 10 -8");
}
</style><g class="nrj6p8qat"><path class="tlag47v4y"/><path class="niggb1byh"/></g>`,
		"fallback": "iconmind:stadium-outline-regular",
	});
}

export default Component;
