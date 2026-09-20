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
		"content": `<style>.ag9lytb5i {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m10 9 3 3 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.o8scmcc3i {
  d: path("M3 12h10");
}

.qva42dwph {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M15 3h6v18h-6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vgx27qokn {
  d: path("M15 3h6v18h-6");
}

.vl1or3bhv {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 12h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vsmfi0bcq {
  d: path("m10 9 3 3 -3 3");
}
</style><g class="s0phu2bbs"><path class="qva42dwph"/><path class="vl1or3bhv"/><path class="ag9lytb5i"/><path class="vgx27qokn"/><path class="o8scmcc3i"/><path class="vsmfi0bcq"/></g>`,
		"fallback": "iconmind:login-duotone-bold",
	});
}

export default Component;
