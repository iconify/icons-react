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
		"content": `<style>.ae0h5kb0o {
  d: path("M9 15h6");
}

.crzn5obfu {
  fill: currentColor;
  d: path("M15 5h5v8l-8 8 -8 -8V5h5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.jlfjgzbqx {
  d: path("M9 9h6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x1_r36phd {
  d: path("M9 12h6");
}

.ymp2b4b6u {
  d: path("M15 5h5v8l-8 8 -8 -8V5h5");
}
</style><g class="s0phu2bbs"><path class="crzn5obfu"/><path class="ymp2b4b6u"/><path class="jlfjgzbqx"/><path class="x1_r36phd"/><path class="ae0h5kb0o"/></g>`,
		"fallback": "iconmind:slsa-duotone-bold",
	});
}

export default Component;
