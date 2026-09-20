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
		"content": `<style>.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.so5p-db7p {
  d: path("M7 12h3l3 -3V5h2.5v5H19v10H7Z");
}

.v20aanbzl {
  d: path("M7 12H3v8h4");
}

.w-p54wt7w {
  fill: currentColor;
  d: path("M7 12h3l3 -3V5h2.5v5H19v10H7Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="w-p54wt7w"/><path class="v20aanbzl"/><path class="so5p-db7p"/></g>`,
		"fallback": "iconmind:motivation-duotone-bold",
	});
}

export default Component;
