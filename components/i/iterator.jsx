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
		"content": `<style>.k_y2xpwaa {
  d: path("M16 5.072a8 8 0 1 1-8 0");
}

.u95zk4bjs {
  d: path("m5.25 4.25l3 .75l-.75 3M9 12h.01M12 12h.01M15 12h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k_y2xpwaa"/><path class="u95zk4bjs"/></g>`,
		"fallback": "uix-sharp:iterator",
	});
}

export default Component;
