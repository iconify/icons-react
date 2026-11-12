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

.ozf7_rb1s {
  d: path("M4 4C12.8366 4 20 11.1634 20 20");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.t9y85lbpz {
  d: path("M4 12C8.4183 12 12 15.5817 12 20");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.xiaawqbyt {
  d: path("M4 20H4.0001");
}
</style><g class="hntgybcog"><path class="xiaawqbyt"/><path class="t9y85lbpz"/><path class="ozf7_rb1s"/></g>`,
		"fallback": "solar:rss-line-duotone",
	});
}

export default Component;
