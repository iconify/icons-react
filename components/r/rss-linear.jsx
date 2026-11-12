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

.rbfo13byn {
  d: path("M4 12C8.4183 12 12 15.5817 12 20");
}

.t8pe7mbkr {
  d: path("M4 4C12.8366 4 20 11.1634 20 20");
}

.xiaawqbyt {
  d: path("M4 20H4.0001");
}
</style><g class="hntgybcog"><path class="xiaawqbyt"/><path class="rbfo13byn"/><path class="t8pe7mbkr"/></g>`,
		"fallback": "solar:rss-linear",
	});
}

export default Component;
