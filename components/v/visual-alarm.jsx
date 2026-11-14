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

.kndmodbdo {
  d: path("m11.5 11.5l-.441.882a.773.773 0 0 0 .691 1.118a.773.773 0 0 1 .691 1.118L12.25 15a.272.272 0 0 1-.513-.16l.447-3.126a.363.363 0 0 0-.684-.214");
}

.zdgtc7bfp {
  d: path("M6.5 17v-4a5.5 5.5 0 0 1 11 0v4M6.25 17h11.5a1.75 1.75 0 0 1 1.75 1.75a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 1 6.25 17M12 2.5v2m-8 1L5.5 7M20 5.5L18.5 7");
}
</style><g class="hntgybcog"><path class="zdgtc7bfp"/><path class="kndmodbdo"/></g>`,
		"fallback": "uix:visual-alarm",
	});
}

export default Component;
