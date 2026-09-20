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
		"content": `<style>.bso0bbbqi {
  d: path("M21 8A9 9 0 0 1 3 8");
}

.lm0rdp4mt {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M21 8A9 9 0 0 1 3 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mqtixbwqo {
  d: path("M2 8h20");
}

.o9nm0ibif {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M5 12h14");
  opacity: var(--svg-opacity--0-2, 0.2);
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

.z8g2jgblp {
  d: path("M5 12h14");
}
</style><g class="s0phu2bbs"><path class="trirghiqk"/><path class="lm0rdp4mt"/><path class="o9nm0ibif"/><path class="mqtixbwqo"/><path class="bso0bbbqi"/><path class="z8g2jgblp"/></g>`,
		"fallback": "iconmind:portion-duotone-bold",
	});
}

export default Component;
