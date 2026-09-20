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
		"content": `<style>.nzpsuduik {
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uvy68-qdb {
  d: path("m8 14 3 3 5 -5");
}

.vhnbtvbtn {
  d: path("M3 8h18");
}
</style><g class="s0phu2bbs"><path class="nzpsuduik"/><path class="vhnbtvbtn"/><path class="uvy68-qdb"/></g>`,
		"fallback": "iconmind:page-verified-outline-bold",
	});
}

export default Component;
