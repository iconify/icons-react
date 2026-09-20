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
		"content": `<style>.a8cyhwbdj {
  d: path("M16 2v3");
}

.cu26jmb_i {
  d: path("M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.j835zw5-z {
  d: path("M3 9h18");
}

.ksrxg1b4b {
  d: path("m8 19 7 -7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q7kpryb3v {
  d: path("M8 2v3");
}

.uuj0dsv7p {
  d: path("m13 11 3 3");
}
</style><g class="nrj6p8qat"><path class="cu26jmb_i"/><path class="j835zw5-z"/><path class="q7kpryb3v"/><path class="a8cyhwbdj"/><path class="ksrxg1b4b"/><path class="uuj0dsv7p"/></g>`,
		"fallback": "iconmind:vaccination-schedule-outline-regular",
	});
}

export default Component;
