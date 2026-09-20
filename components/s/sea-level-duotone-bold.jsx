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
		"content": `<style>.a23llpbrh {
  d: path("M4 3h4");
}

.aep_ellef {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 3v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.b-rxu8bqf {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m9 20 3 -3 3 3 3 -3 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.daxdrrb0a {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m9 15 3 -3 3 3 3 -3 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ftqzjnb8u {
  d: path("M6 3v18");
}

.gj9xsebsr {
  d: path("m9 20 3 -3 3 3 3 -3 3 3");
}

.qwaphmbjf {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 9h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s09jr7bxh {
  d: path("m9 15 3 -3 3 3 3 -3 3 3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ta7smn7pq {
  d: path("M4 9h4");
}

.zhxt7nh4s {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 3h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="aep_ellef"/><path class="zhxt7nh4s"/><path class="qwaphmbjf"/><path class="daxdrrb0a"/><path class="b-rxu8bqf"/><path class="ftqzjnb8u"/><path class="a23llpbrh"/><path class="ta7smn7pq"/><path class="s09jr7bxh"/><path class="gj9xsebsr"/></g>`,
		"fallback": "iconmind:sea-level-duotone-bold",
	});
}

export default Component;
