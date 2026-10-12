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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t1w4rp34a {
  d: path("m3.75 18.25l2.75-1.5l2.75 1.5l2.75-1.5l2.75 1.5l2.75-1.5l2.75 1.5");
}

.ufsuvdbvd {
  d: path("M5.75 21.25h12.5a2 2 0 0 0 2-2v-5.6a1 1 0 0 0-.5-.87L5.25 4.45a1 1 0 0 0-1.5.87v13.93a2 2 0 0 0 2 2m-2-7h16.5");
}
</style><g class="hntgybcog"><path class="ufsuvdbvd"/><path class="t1w4rp34a"/></g>`,
		"fallback": "iconoven:sandwich",
	});
}

export default Component;
