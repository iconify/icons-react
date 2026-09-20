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
		"content": `<style>.eysw87xdb {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m10 12 4 4h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fyyr_6-1m {
  d: path("m10 12 4 -4h7");
}

.jcxg2bbvb {
  d: path("M2 12h8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ue-dwjbmw {
  d: path("m10 12 4 4h7");
}

.wc2iww91l {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 12h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.we519kbrq {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m10 12 4 -4h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="wc2iww91l"/><path class="we519kbrq"/><path class="eysw87xdb"/><path class="jcxg2bbvb"/><path class="fyyr_6-1m"/><path class="ue-dwjbmw"/></g>`,
		"fallback": "iconmind:splitter-duotone-bold",
	});
}

export default Component;
