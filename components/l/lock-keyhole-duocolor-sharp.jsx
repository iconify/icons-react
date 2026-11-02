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
		"content": `<style>.ay0o1u2ti {
  stroke-opacity: 0.4;
  d: path("M9 10V6a3 3 0 0 1 6 0v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.yx1v9iryt {
  d: path("M4 10h16v11H4Zm7 4a1 1 0 1 0 2 0a1 1 0 0 0-2 0m1 1v3");
}
</style><g class="nrj6p8qat"><path class="ay0o1u2ti"/><path class="yx1v9iryt"/></g>`,
		"fallback": "coolicons:lock-keyhole-duocolor-sharp",
	});
}

export default Component;
