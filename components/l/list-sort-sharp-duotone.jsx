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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.kvsxqqgbw {
  stroke-opacity: 0.4;
  d: path("M6 11L6 3M2.7071 6.2929L6 3L9.2929 6.2929M6 13L6 21M2.7071 17.7071L6 21L9.2929 17.7071");
}

.x9obmne9u {
  d: path("M12 6L22 6M12 12L22 12M12 18L22 18");
}
</style><g class="gp_8x1bzb"><path class="kvsxqqgbw"/><path class="x9obmne9u"/></g>`,
		"fallback": "keyline-icons:list-sort-sharp-duotone",
	});
}

export default Component;
