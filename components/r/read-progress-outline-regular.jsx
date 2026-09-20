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
		"content": `<style>.bv8--5gox {
  d: path("M11 15h6v3h-6Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wuvisubmw {
  d: path("M8 3v18");
}

.y4_6s7b5v {
  d: path("M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.ygselab1a {
  d: path("M14 15v3");
}
</style><g class="nrj6p8qat"><path class="y4_6s7b5v"/><path class="wuvisubmw"/><path class="bv8--5gox"/><path class="ygselab1a"/></g>`,
		"fallback": "iconmind:read-progress-outline-regular",
	});
}

export default Component;
