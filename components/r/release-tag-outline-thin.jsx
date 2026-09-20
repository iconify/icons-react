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
		"content": `<style>.a7vpafiwa {
  d: path("M6 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.fmjpvzbts {
  d: path("M11 14h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.msaz94ywr {
  d: path("M11 10h7");
}

.x9kn15bcl {
  d: path("m2 12 7 -7h12v14H9Z");
}
</style><g class="hntgybcog"><path class="x9kn15bcl"/><path class="a7vpafiwa"/><path class="msaz94ywr"/><path class="fmjpvzbts"/></g>`,
		"fallback": "iconmind:release-tag-outline-thin",
	});
}

export default Component;
