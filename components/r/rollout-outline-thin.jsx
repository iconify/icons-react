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
		"content": `<style>.bj2hlhbfp {
  d: path("M3 12h12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ic_pehd5a {
  d: path("M3 17h18");
}

.xrnoeq00r {
  d: path("M3 7h6");
}
</style><g class="hntgybcog"><path class="xrnoeq00r"/><path class="bj2hlhbfp"/><path class="ic_pehd5a"/></g>`,
		"fallback": "iconmind:rollout-outline-thin",
	});
}

export default Component;
