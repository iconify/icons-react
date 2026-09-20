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
		"content": `<style>.fpu30agfz {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 9v11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hpm6v1-ys {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 20h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hzrvytb7n {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M16 13v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ioeb-3q9w {
  d: path("M16 13v7");
}

.jkuojibnm {
  d: path("M3 20h18");
}

.mt6pcobjc {
  d: path("M6 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.q1d1qljaw {
  d: path("M8 9v11");
}

.qk6s1kxhv {
  d: path("M14 11a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.ql_dtebbu {
  fill: currentColor;
  d: path("M14 11a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.qzmj_xbmj {
  fill: currentColor;
  d: path("M6 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="qzmj_xbmj"/><path class="ql_dtebbu"/><path class="fpu30agfz"/><path class="hzrvytb7n"/><path class="hpm6v1-ys"/><path class="mt6pcobjc"/><path class="q1d1qljaw"/><path class="qk6s1kxhv"/><path class="ioeb-3q9w"/><path class="jkuojibnm"/></g>`,
		"fallback": "iconmind:lollipop-chart-duotone-bold",
	});
}

export default Component;
