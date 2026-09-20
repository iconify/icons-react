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
		"content": `<style>.fyyr_6-1m {
  d: path("m10 12 4 -4h7");
}

.jcxg2bbvb {
  d: path("M2 12h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ue-dwjbmw {
  d: path("m10 12 4 4h7");
}
</style><g class="nrj6p8qat"><path class="jcxg2bbvb"/><path class="fyyr_6-1m"/><path class="ue-dwjbmw"/></g>`,
		"fallback": "iconmind:splitter-outline-regular",
	});
}

export default Component;
