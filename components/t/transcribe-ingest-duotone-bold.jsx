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
		"content": `<style>.bbmo_zb_v {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 6v12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.f6k_-qbtg {
  d: path("M16 13h3");
}

.hcqml3bhu {
  d: path("M8 6v12");
}

.j4z1smu9o {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 9v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ki0qkpb_m {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M16 17h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kkvfu5bre {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 9v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.l517yxbln {
  d: path("M12 9v6");
}

.lbz2yq5no {
  d: path("M4 9v6");
}

.ltwymubej {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M16 13h3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.suj4vub5a {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M16 9h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.uub08b4lk {
  d: path("M16 9h5");
}

.xbl1wuhge {
  d: path("M16 17h5");
}
</style><g class="s0phu2bbs"><path class="j4z1smu9o"/><path class="bbmo_zb_v"/><path class="kkvfu5bre"/><path class="suj4vub5a"/><path class="ltwymubej"/><path class="ki0qkpb_m"/><path class="lbz2yq5no"/><path class="hcqml3bhu"/><path class="l517yxbln"/><path class="uub08b4lk"/><path class="f6k_-qbtg"/><path class="xbl1wuhge"/></g>`,
		"fallback": "iconmind:transcribe-ingest-duotone-bold",
	});
}

export default Component;
