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
		"content": `<style>.h3z-uye4u {
  d: path("m8 8 4 -4 4 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mnwr0qhch {
  d: path("M12 4v17");
}
</style><g class="hntgybcog"><path class="mnwr0qhch"/><path class="h3z-uye4u"/></g>`,
		"fallback": "iconmind:straight-ahead-outline-thin",
	});
}

export default Component;
