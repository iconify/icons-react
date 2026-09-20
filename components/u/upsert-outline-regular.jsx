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
		"content": `<style>.c51p9nb2t {
  d: path("m6 6 3 3 3 -3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nw0y-0bem {
  d: path("M17 3v4");
}

.vb93covwl {
  d: path("M15 5h4");
}

.x_7wq3p0y {
  d: path("M9 3v5");
}

.xyj-l9cjp {
  d: path("M3 18h18");
}

.yih0nfb7c {
  d: path("M3 14h18");
}
</style><g class="nrj6p8qat"><path class="yih0nfb7c"/><path class="xyj-l9cjp"/><path class="x_7wq3p0y"/><path class="c51p9nb2t"/><path class="nw0y-0bem"/><path class="vb93covwl"/></g>`,
		"fallback": "iconmind:upsert-outline-regular",
	});
}

export default Component;
