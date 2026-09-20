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
		"content": `<style>.g9c4ykb9u {
  d: path("M11 12h10");
}

.m27ljac1c {
  d: path("m18 9 3 3 -3 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wt76_hbmn {
  d: path("M9 3H3v18h6");
}
</style><g class="nrj6p8qat"><path class="wt76_hbmn"/><path class="g9c4ykb9u"/><path class="m27ljac1c"/></g>`,
		"fallback": "iconmind:logout-outline-regular",
	});
}

export default Component;
