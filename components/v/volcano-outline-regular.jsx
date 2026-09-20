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
		"content": `<style>.a8u3jfbrq {
  d: path("M10 13V9h4v4");
}

.cvahx_bgf {
  d: path("m9 9 3 -3 3 3");
}

.l4f5m0byt {
  d: path("m3 20 7 -7h4l7 7Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="l4f5m0byt"/><path class="a8u3jfbrq"/><path class="cvahx_bgf"/></g>`,
		"fallback": "iconmind:volcano-outline-regular",
	});
}

export default Component;
