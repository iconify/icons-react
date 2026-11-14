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
		"content": `<style>.twtf33p9s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.672 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c1.037 0 2.015.134 2.901.384M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0M18 14.75v6.5m-2.75-4.75l5.5 3m-5.5 0l5.5-3");
}
</style><path class="twtf33p9s"/>`,
		"fallback": "uix:lead-cold",
	});
}

export default Component;
