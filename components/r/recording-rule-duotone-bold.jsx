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
		"content": `<style>.boih2gbbw {
  fill: currentColor;
  d: path("M15.5 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.dh-nlhghu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.j5573l00j {
  d: path("m7 15 3 -3h3.5");
}

.jiw8u-asa {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 20h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lg67-2dch {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m7 15 3 -3h3.5");
  opacity: var(--svg-opacity--0-2, 0.2);
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
</style><g class="s0phu2bbs"><path class="boih2gbbw"/><path class="dh-nlhghu"/><path class="jiw8u-asa"/><path class="lg67-2dch"/><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="j5573l00j"/><path class="nwoj8248o"/></g>`,
		"fallback": "iconmind:recording-rule-duotone-bold",
	});
}

export default Component;
