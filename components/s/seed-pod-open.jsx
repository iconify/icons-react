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
		"content": `<style>.twjcaqcap {
  d: path("M5.75 16.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM10 12.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm4.25-3.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM19.5 5.5L21 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ussy0vfdp {
  d: path("M3.5 19.5c.5-10.25 5.75-15 16-14c-.5 10.25-5.75 15-16 14Z");
}
</style><g class="ulnmmdpxh"><path class="ussy0vfdp"/><path class="twjcaqcap"/></g>`,
		"fallback": "uix-sharp:seed-pod-open",
	});
}

export default Component;
