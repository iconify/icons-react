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
		"content": `<style>.mtet-5-cd {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M5 4v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ntzm30buc {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M19 4v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.on4ig8t5d {
  d: path("M5 4v10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.smyhnv9tm {
  d: path("M19 14a7 7 0 0 1 -14 0");
}

.ydl8e0r_x {
  d: path("M19 4v10");
}

.zbgqcxb7p {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M19 14a7 7 0 0 1 -14 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="mtet-5-cd"/><path class="zbgqcxb7p"/><path class="ntzm30buc"/><path class="on4ig8t5d"/><path class="smyhnv9tm"/><path class="ydl8e0r_x"/></g>`,
		"fallback": "iconmind:union-duotone-bold",
	});
}

export default Component;
