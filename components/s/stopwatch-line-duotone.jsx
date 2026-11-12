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
		"content": `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p7p5oub5r {
  d: path("M21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 8.02944 7.02944 4 12 4C16.9706 4 21 8.02944 21 13Z");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.pxm7_12cz {
  stroke-linejoin: round;
  d: path("M12 13V9");
}

.u8gkuv4uz {
  d: path("M10 2H14");
}
</style><g class="ipq1z-bjh"><path class="p7p5oub5r"/><path class="pxm7_12cz"/><path class="u8gkuv4uz"/></g>`,
		"fallback": "solar:stopwatch-line-duotone",
	});
}

export default Component;
