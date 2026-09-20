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
		"content": `<style>.h5uycs4sy {
  d: path("M2 16h8");
}

.jcxg2bbvb {
  d: path("M2 12h8");
}

.o0-3vqblf {
  d: path("M2 8h8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wp75hkmty {
  d: path("M11 7v10");
}

.y2lgilb0y {
  d: path("M13 12h9");
}
</style><g class="s0phu2bbs"><path class="o0-3vqblf"/><path class="jcxg2bbvb"/><path class="h5uycs4sy"/><path class="wp75hkmty"/><path class="y2lgilb0y"/></g>`,
		"fallback": "iconmind:rate-limit-outline-bold",
	});
}

export default Component;
