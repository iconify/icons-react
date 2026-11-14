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
		"content": `<style>.ppc5lxbvy {
  d: path("M3 17.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm13 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.psmd6bbsj {
  d: path("M5.5 17.5H14l2.5-11H19m-6 0h3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ppc5lxbvy"/><path class="psmd6bbsj"/></g>`,
		"fallback": "uix-sharp:scooter-rental",
	});
}

export default Component;
