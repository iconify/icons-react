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
		"content": `<style>.eonp48qtu {
  d: path("M12 11v7.75a1.75 1.75 0 0 1-3.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rv4a1xb0g {
  d: path("M3.25 12.25a8.75 8.75 0 0 1 17.5 0a3.75 3.75 0 0 0-5.83 0a3.75 3.75 0 0 0-5.84 0a3.75 3.75 0 0 0-5.83 0");
}
</style><g class="hntgybcog"><path class="rv4a1xb0g"/><path class="eonp48qtu"/></g>`,
		"fallback": "iconoven:umbrella",
	});
}

export default Component;
