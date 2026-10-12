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

.s9yqkobhu {
  d: path("M12 12.75c-1 1.25-1.5 2-1.5 2.75a1.5 1.5 0 0 0 3 0c0-.75-.5-1.5-1.5-2.75");
}

.y4qkcdcik {
  d: path("M10.25 2.75h3.5v4.5l2.75 3v9.25a1.75 1.75 0 0 1-1.75 1.75h-5.5A1.75 1.75 0 0 1 7.5 19.5v-9.25l2.75-3Zm0 2.5h3.5");
}
</style><g class="hntgybcog"><path class="y4qkcdcik"/><path class="s9yqkobhu"/></g>`,
		"fallback": "iconoven:sauce-bottle",
	});
}

export default Component;
