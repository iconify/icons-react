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
		"content": `<style>.agt_s_bgm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 11h11.5a1.75 1.75 0 0 1 1.75 1.75a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 1 6.25 11m1.915 3.5h7.67a1.75 1.75 0 0 1 1.711 2.117l-.75 3.5a1.75 1.75 0 0 1-1.711 1.383h-6.17a1.75 1.75 0 0 1-1.711-1.383l-.75-3.5A1.75 1.75 0 0 1 8.165 14.5M12 11V8c-.25-3-2.25-5-5.25-5C6.75 6 9 8 12 8c.25-3.25 2.25-5.5 5.25-5.5c0 3-2 5.5-5.25 5.5");
}
</style><path class="agt_s_bgm"/>`,
		"fallback": "uix:plant-pot-terracotta",
	});
}

export default Component;
