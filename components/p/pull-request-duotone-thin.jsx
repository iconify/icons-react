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
		"content": `<style>.brze8vkpt {
  d: path("M18 5v11.5");
}

.doj56ib_s {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 7.5V21");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.dwa-v92dh {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m15 8 3 -3 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.e3ixvub0q {
  d: path("m15 8 3 -3 3 3");
}

.fsal-c_tf {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M18 5v11.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kn0tcm93r {
  d: path("M4 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.pw61xnbei {
  d: path("M16 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.qecovn3xi {
  fill: currentColor;
  d: path("M4 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.st2iv5bfu {
  fill: currentColor;
  d: path("M16 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xaitxdbcw {
  d: path("M6 7.5V21");
}
</style><g class="hntgybcog"><path class="qecovn3xi"/><path class="st2iv5bfu"/><path class="doj56ib_s"/><path class="fsal-c_tf"/><path class="dwa-v92dh"/><path class="kn0tcm93r"/><path class="xaitxdbcw"/><path class="brze8vkpt"/><path class="pw61xnbei"/><path class="e3ixvub0q"/></g>`,
		"fallback": "iconmind:pull-request-duotone-thin",
	});
}

export default Component;
