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
		"content": `<style>.c3wl0l-ou {
  d: path("M19 13v6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pbz4y6llk {
  d: path("M5 13v6");
}

.sdu6a9xcp {
  d: path("M9 3v12l3 3 3 -3V3");
}

.va9i39bae {
  d: path("M7 3h10");
}

.y07a50u1t {
  d: path("M5 13h14");
}
</style><g class="nrj6p8qat"><path class="sdu6a9xcp"/><path class="va9i39bae"/><path class="y07a50u1t"/><path class="pbz4y6llk"/><path class="c3wl0l-ou"/></g>`,
		"fallback": "iconmind:test-tube-outline-regular",
	});
}

export default Component;
