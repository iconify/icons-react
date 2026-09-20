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
		"content": `<style>.crw18vrkk {
  d: path("m18 14 -5 5H9");
}

.hspeog_hs {
  d: path("m7 18 -4 -4 4 -4");
}

.kd8pirhpr {
  d: path("M12.5 6.5 15 9l-2.5 2.5");
}

.mlzwc7b5b {
  d: path("m6 14 5 -5h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.z-xixkiyt {
  d: path("M11.5 16.5 9 19l2.5 2.5");
}
</style><g class="nrj6p8qat"><path class="mlzwc7b5b"/><path class="kd8pirhpr"/><path class="crw18vrkk"/><path class="z-xixkiyt"/><path class="hspeog_hs"/></g>`,
		"fallback": "iconmind:recycle-outline-regular",
	});
}

export default Component;
