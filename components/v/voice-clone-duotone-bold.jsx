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
		"content": `<style>.g8q62k13p {
  d: path("M5.88 14.12a3 3 0 0 1 0 -4.24");
}

.ix7nm4b_a {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M20.24 7.76a6 6 0 0 1 0 8.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kt4vswbcx {
  d: path("M18.12 9.88a3 3 0 0 1 0 4.24");
}

.n49oq7__n {
  d: path("M3.76 16.24a6 6 0 0 1 0 -8.5");
}

.nf7-vla4l {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M18.12 9.88a3 3 0 0 1 0 4.24");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.onkakwu-v {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3.76 16.24a6 6 0 0 1 0 -8.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.u9ungwb-f {
  d: path("M20.24 7.76a6 6 0 0 1 0 8.5");
}

.yb522ge7e {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M5.88 14.12a3 3 0 0 1 0 -4.24");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="yb522ge7e"/><path class="onkakwu-v"/><path class="nf7-vla4l"/><path class="ix7nm4b_a"/><path class="g8q62k13p"/><path class="n49oq7__n"/><path class="kt4vswbcx"/><path class="u9ungwb-f"/></g>`,
		"fallback": "iconmind:voice-clone-duotone-bold",
	});
}

export default Component;
