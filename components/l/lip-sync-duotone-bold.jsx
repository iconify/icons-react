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
		"content": `<style>.d2t-1obfm {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M14.5 10a5.5 5.5 0 0 1 -11 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fijjj9b9u {
  d: path("M20.54 6.46a5 5 0 0 1 0 7.08");
}

.iprvt7beg {
  d: path("M19.12 7.88a3 3 0 0 1 0 4.24");
}

.lgi8ggbzr {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M19.12 7.88a3 3 0 0 1 0 4.24");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rjulhyb6m {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M20.54 6.46a5 5 0 0 1 0 7.08");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ydk-7sp0t {
  d: path("M14.5 10a5.5 5.5 0 0 1 -11 0");
}
</style><g class="s0phu2bbs"><path class="d2t-1obfm"/><path class="lgi8ggbzr"/><path class="rjulhyb6m"/><path class="ydk-7sp0t"/><path class="iprvt7beg"/><path class="fijjj9b9u"/></g>`,
		"fallback": "iconmind:lip-sync-duotone-bold",
	});
}

export default Component;
