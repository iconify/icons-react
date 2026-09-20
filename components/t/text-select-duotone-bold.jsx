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
		"content": `<style>.a4ea1f79x {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M21 17v3h-3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.c3xkg9bus {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 15h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ger3knb8w {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M18 4h3v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hpmnlabtt {
  d: path("M6 9h12");
}

.jm6ti-b3r {
  d: path("M6 15h12");
}

.n0qwiwbct {
  d: path("M18 4h3v3");
}

.qku95wbln {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 20H3v-3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rrleuowpn {
  d: path("M6 20H3v-3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.v_r75qfah {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 7V4h3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vwjblmbrl {
  d: path("M21 17v3h-3");
}

.w-0ktubui {
  d: path("M3 7V4h3");
}

.z5f7ktuvf {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 9h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="v_r75qfah"/><path class="ger3knb8w"/><path class="a4ea1f79x"/><path class="qku95wbln"/><path class="z5f7ktuvf"/><path class="c3xkg9bus"/><path class="w-0ktubui"/><path class="n0qwiwbct"/><path class="vwjblmbrl"/><path class="rrleuowpn"/><path class="hpmnlabtt"/><path class="jm6ti-b3r"/></g>`,
		"fallback": "iconmind:text-select-duotone-bold",
	});
}

export default Component;
