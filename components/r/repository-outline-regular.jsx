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
		"content": `<style>.jd-uqebzu {
  d: path("M13.5 3H17a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3V6a3 3 0 0 1 3 -3h3.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q6q805_az {
  d: path("M12 3v7l2.5 -2.5L17 10V3");
}

.wuvisubmw {
  d: path("M8 3v18");
}
</style><g class="nrj6p8qat"><path class="jd-uqebzu"/><path class="wuvisubmw"/><path class="q6q805_az"/></g>`,
		"fallback": "iconmind:repository-outline-regular",
	});
}

export default Component;
