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
		"content": `<style>.a9nj5hbth {
  d: path("M4 11h16");
}

.f95tsn8zu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 11h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.grt7vrw-d {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 16h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ils7yp4cg {
  d: path("M2 16h20");
}

.mqtixbwqo {
  d: path("M2 8h20");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.trirghiqk {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 8h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="trirghiqk"/><path class="f95tsn8zu"/><path class="grt7vrw-d"/><path class="mqtixbwqo"/><path class="a9nj5hbth"/><path class="ils7yp4cg"/></g>`,
		"fallback": "iconmind:platform-duotone-bold",
	});
}

export default Component;
