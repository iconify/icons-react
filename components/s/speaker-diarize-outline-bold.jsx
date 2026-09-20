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
		"content": `<style>.eah0r8b_w {
  d: path("M19.19 3.37a4 4 0 1 1 -3.38 0");
}

.nbsfmkbol {
  d: path("M8.19 3.37a4 4 0 1 1 -3.38 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x2b10gplf {
  d: path("m3 17 3 -3 3 3 3 -3 3 3 3 -3 3 3");
}
</style><g class="s0phu2bbs"><path class="nbsfmkbol"/><path class="eah0r8b_w"/><path class="x2b10gplf"/></g>`,
		"fallback": "iconmind:speaker-diarize-outline-bold",
	});
}

export default Component;
