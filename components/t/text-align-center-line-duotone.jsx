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
		"content": `<style>.a01hat8wv {
  d: path("M7.5 10H16.5M7.5 18H16.5");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y8rchkbuh {
  d: path("M5 6H19");
}

.zvlywgbxr {
  d: path("M5 14H19");
}
</style><g class="hntgybcog"><path class="a01hat8wv"/><path class="y8rchkbuh"/><path class="zvlywgbxr"/></g>`,
		"fallback": "solar:text-align-center-line-duotone",
	});
}

export default Component;
