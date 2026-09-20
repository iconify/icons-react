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
		"content": `<style>.gumem2bkh {
  d: path("m6 13 6 6 6 -6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kk4vcs1ji {
  d: path("m12 2 7 7 -7 7 -7 -7Z");
}

.ov7kkt0lo {
  d: path("m8 17 4 4 4 -4");
}
</style><g class="hntgybcog"><path class="kk4vcs1ji"/><path class="gumem2bkh"/><path class="ov7kkt0lo"/></g>`,
		"fallback": "iconmind:map-layer-outline-thin",
	});
}

export default Component;
