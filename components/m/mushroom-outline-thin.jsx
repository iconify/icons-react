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
		"content": `<style>.e4rbzsbiw {
  d: path("M3 11a9 9 0 0 1 18 0Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sg8usjbiz {
  d: path("M9 13v6");
}

.u2vvzw7_k {
  d: path("M15 13v6");
}

.wuk2mlziz {
  d: path("M7 19h10");
}
</style><g class="hntgybcog"><path class="e4rbzsbiw"/><path class="sg8usjbiz"/><path class="u2vvzw7_k"/><path class="wuk2mlziz"/></g>`,
		"fallback": "iconmind:mushroom-outline-thin",
	});
}

export default Component;
