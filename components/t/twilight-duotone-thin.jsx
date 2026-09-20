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
		"content": `<style>.cu6e5abrj {
  fill: currentColor;
  d: path("M18 6.5 20.5 9 18 11.5 15.5 9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.cx4rf3b3b {
  d: path("M6 4.5 8.5 7 6 9.5 3.5 7Z");
}

.dwzg60n6e {
  fill: currentColor;
  d: path("M6 4.5 8.5 7 6 9.5 3.5 7Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mcqgo4bpg {
  d: path("M18 6.5 20.5 9 18 11.5 15.5 9Z");
}

.yelo88bjk {
  d: path("M5 18a7 7 0 0 1 14 0");
}

.z9ittvbis {
  d: path("M2 19h20");
}
</style><g class="hntgybcog"><path class="dwzg60n6e"/><path class="cu6e5abrj"/><path class="yelo88bjk"/><path class="z9ittvbis"/><path class="cx4rf3b3b"/><path class="mcqgo4bpg"/></g>`,
		"fallback": "iconmind:twilight-duotone-thin",
	});
}

export default Component;
