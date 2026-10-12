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
		"content": `<style>.fr9wc8ere {
  width: 18.5px;
  height: 16.5px;
  x: 2.75px;
  y: 3.75px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vhhl-0xxp {
  d: path("M12 4.5v15M9 10l-2 2l2 2m6-4l2 2l-2 2");
}
</style><g class="hntgybcog"><rect class="fr9wc8ere"/><path class="vhhl-0xxp"/></g>`,
		"fallback": "iconoven:split-view",
	});
}

export default Component;
