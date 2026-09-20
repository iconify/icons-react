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
		"content": `<style>.rayu03smu {
  fill: currentColor;
  d: path("M6 3h12v9l-6 6 -6 -6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t4jinwb2i {
  d: path("m9.5 8 2.5 2.5L14.5 8");
}

.tv0rskvbk {
  d: path("M6 3h12v9l-6 6 -6 -6Z");
}
</style><g class="s0phu2bbs"><path class="rayu03smu"/><path class="tv0rskvbk"/><path class="t4jinwb2i"/></g>`,
		"fallback": "iconmind:route-marker-duotone-bold",
	});
}

export default Component;
