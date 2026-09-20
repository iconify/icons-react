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
		"content": `<style>.hfzq5f4-k {
  d: path("M7 9h6");
}

.l_69zfb0c {
  d: path("M9 13a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.nzq45nc7z {
  fill: currentColor;
  d: path("M9 13a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.rkhcgsbdl {
  d: path("M3 19h18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.znfuzdoyp {
  d: path("M7 3v6");
}
</style><g class="s0phu2bbs"><path class="nzq45nc7z"/><path class="znfuzdoyp"/><path class="hfzq5f4-k"/><path class="l_69zfb0c"/><path class="rkhcgsbdl"/></g>`,
		"fallback": "iconmind:metal-detecting-duotone-bold",
	});
}

export default Component;
