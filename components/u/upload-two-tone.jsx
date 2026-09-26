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
		"content": `<style>.budvl5y-x {
  d: path("M4 18L4 19C4 20.1046 4.8954 21 6 21L18 21C19.1046 21 20 20.1046 20 19L20 18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.w81tqgmta {
  stroke-opacity: 0.4;
  d: path("M12 14L12 3M8 7L12 3L16 7");
}
</style><g class="nrj6p8qat"><path class="w81tqgmta"/><path class="budvl5y-x"/></g>`,
		"fallback": "keyline-icons:upload-two-tone",
	});
}

export default Component;
