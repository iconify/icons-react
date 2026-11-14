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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.po0uonb9u {
  d: path("M5 10H14M5 18H14");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.y8rchkbuh {
  d: path("M5 6H19");
}

.zvlywgbxr {
  d: path("M5 14H19");
}
</style><g class="hntgybcog"><path class="po0uonb9u"/><path class="y8rchkbuh"/><path class="zvlywgbxr"/></g>`,
		"fallback": "solar:text-align-left-line-duotone",
	});
}

export default Component;
