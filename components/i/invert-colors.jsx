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

.pfbzi9b-v {
  d: path("M12 2.75c3.5 4 6.5 7.5 6.5 11a6.5 6.5 0 0 1-6.5 6.5Z");
}

.xzwjjq-dn {
  d: path("M12 2.75c3.5 4 6.5 7.5 6.5 11a6.5 6.5 0 0 1-13 0c0-3.5 3-7 6.5-11");
}
</style><g class="hntgybcog"><path class="xzwjjq-dn"/><path class="pfbzi9b-v"/></g>`,
		"fallback": "iconoven:invert-colors",
	});
}

export default Component;
