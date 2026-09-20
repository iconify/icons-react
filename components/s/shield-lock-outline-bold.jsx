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
		"content": `<style>.ijgmec7ta {
  d: path("M10 11a2 2 0 0 1 4 0");
}

.mkd2anbbl {
  d: path("M9 11h6v5H9Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ymp2b4b6u {
  d: path("M15 5h5v8l-8 8 -8 -8V5h5");
}
</style><g class="s0phu2bbs"><path class="ymp2b4b6u"/><path class="mkd2anbbl"/><path class="ijgmec7ta"/></g>`,
		"fallback": "iconmind:shield-lock-outline-bold",
	});
}

export default Component;
