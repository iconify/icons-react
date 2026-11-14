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
		"content": `<style>.c-x9em5xt {
  d: path("M12 7.5c-5-1-7.5 2-6.5 5.5s4.5 7.5 6.5 8c2-.5 5.5-4.5 6.5-8S17 6.5 12 7.5Z");
}

.t_96fdq-n {
  d: path("m9 5l3 2.5L15 5m-5 7h.01M14 12h.01M12 16h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c-x9em5xt"/><path class="t_96fdq-n"/></g>`,
		"fallback": "uix-sharp:strawberry",
	});
}

export default Component;
