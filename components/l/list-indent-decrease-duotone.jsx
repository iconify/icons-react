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
		"content": `<style>.auvtk9bkr {
  stroke-opacity: 0.4;
  d: path("M8 12L2 12M5 9L2 12L5 15");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.x9obmne9u {
  d: path("M12 6L22 6M12 12L22 12M12 18L22 18");
}
</style><g class="nrj6p8qat"><path class="auvtk9bkr"/><path class="x9obmne9u"/></g>`,
		"fallback": "keyline-icons:list-indent-decrease-duotone",
	});
}

export default Component;
