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
		"content": `<style>.j8arz0w3t {
  d: path("M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r-kal0b4m {
  d: path("M12 17c-2.5 -2 -6 -5 -4.5 -8 1 -2 3 -1.5 4.5 0.5 1.5 -2 3.5 -2.5 4.5 -0.5 1.5 3 -2 6 -4.5 8");
}
</style><g class="nrj6p8qat"><path class="j8arz0w3t"/><path class="r-kal0b4m"/></g>`,
		"fallback": "iconmind:playing-card-outline-regular",
	});
}

export default Component;
