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
		"content": `<style>.cx4rf3b3b {
  d: path("M6 4.5 8.5 7 6 9.5 3.5 7Z");
}

.mcqgo4bpg {
  d: path("M18 6.5 20.5 9 18 11.5 15.5 9Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.yelo88bjk {
  d: path("M5 18a7 7 0 0 1 14 0");
}

.z9ittvbis {
  d: path("M2 19h20");
}
</style><g class="nrj6p8qat"><path class="yelo88bjk"/><path class="z9ittvbis"/><path class="cx4rf3b3b"/><path class="mcqgo4bpg"/></g>`,
		"fallback": "iconmind:twilight-outline-regular",
	});
}

export default Component;
