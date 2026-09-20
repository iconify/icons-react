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
		"content": `<style>.eud-3ptuk {
  d: path("M15 12h7");
}

.i6ydbdc_n {
  d: path("m9 4 6 6v4l-6 6");
}

.ms85c68gf {
  d: path("M2 20h7");
}

.otb2wbb6e {
  d: path("M2 4h7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wj4cfmbhq {
  d: path("M2 12h7");
}
</style><g class="s0phu2bbs"><path class="otb2wbb6e"/><path class="wj4cfmbhq"/><path class="ms85c68gf"/><path class="i6ydbdc_n"/><path class="eud-3ptuk"/></g>`,
		"fallback": "iconmind:nat-outline-bold",
	});
}

export default Component;
