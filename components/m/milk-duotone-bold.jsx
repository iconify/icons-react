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
		"content": `<style>.f8gsx7b5s {
  d: path("M6 8h12");
}

.gcalxb98a {
  d: path("M8 13h8");
}

.qmaccdclu {
  fill: currentColor;
  d: path("M6 21V8l4 -4h4l4 4v13Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.qtxvlht3c {
  d: path("M8 17h8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t2e2ofbwt {
  d: path("M6 21V8l4 -4h4l4 4v13Z");
}
</style><g class="s0phu2bbs"><path class="qmaccdclu"/><path class="t2e2ofbwt"/><path class="f8gsx7b5s"/><path class="gcalxb98a"/><path class="qtxvlht3c"/></g>`,
		"fallback": "iconmind:milk-duotone-bold",
	});
}

export default Component;
