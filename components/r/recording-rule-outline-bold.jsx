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
		"content": `<style>.j5573l00j {
  d: path("m7 15 3 -3h3.5");
}

.nwoj8248o {
  d: path("M15.5 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.r3faxubne {
  d: path("M4 4v16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="j5573l00j"/><path class="nwoj8248o"/></g>`,
		"fallback": "iconmind:recording-rule-outline-bold",
	});
}

export default Component;
