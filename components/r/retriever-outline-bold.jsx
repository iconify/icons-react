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
		"content": `<style>.b_3lf0wwh {
  d: path("M2 8a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.f2m4wubik {
  d: path("M13 12h8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ypoxwcbes {
  d: path("m16 9 -3 3 3 3");
}
</style><g class="s0phu2bbs"><path class="b_3lf0wwh"/><path class="f2m4wubik"/><path class="ypoxwcbes"/></g>`,
		"fallback": "iconmind:retriever-outline-bold",
	});
}

export default Component;
