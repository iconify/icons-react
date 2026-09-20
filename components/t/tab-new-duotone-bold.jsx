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
		"content": `<style>.a46bghb1i {
  d: path("M18 10v6");
}

.d5b4fcc2f {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 19h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.e5hzi9ldh {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M18 10v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.oscmqi7_r {
  d: path("M2 19V9l2 -2h6l2 2v10");
}

.qvtmo6b3b {
  d: path("M15 13h6");
}

.rvub71bbg {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 19V9l2 -2h6l2 2v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xd-ovyw0w {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M15 13h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.z9ittvbis {
  d: path("M2 19h20");
}
</style><g class="s0phu2bbs"><path class="rvub71bbg"/><path class="d5b4fcc2f"/><path class="xd-ovyw0w"/><path class="e5hzi9ldh"/><path class="oscmqi7_r"/><path class="z9ittvbis"/><path class="qvtmo6b3b"/><path class="a46bghb1i"/></g>`,
		"fallback": "iconmind:tab-new-duotone-bold",
	});
}

export default Component;
