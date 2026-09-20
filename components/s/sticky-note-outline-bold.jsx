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

.vf2cjpyzu {
  d: path("M3 3h18v12l-6 6H3Z");
}

.ya5oksyke {
  d: path("M21 15h-6v6");
}
</style><g class="s0phu2bbs"><path class="vf2cjpyzu"/><path class="ya5oksyke"/></g>`,
		"fallback": "iconmind:sticky-note-outline-bold",
	});
}

export default Component;
