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
		"content": `<style>.hhg2n4bac {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 10.5h10.5V16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4ZM14.5 12h1a2.25 2.25 0 0 1 0 4.5h-1m-7-13c-.75 1 .75 2.25 0 3.5M11 3.5c-.75 1 .75 2.25 0 3.5m7.53-2.905l.348.554a1.5 1.5 0 0 0 .473.473l.554.348a.626.626 0 0 1 0 1.06l-.554.348a1.5 1.5 0 0 0-.473.473l-.348.554a.626.626 0 0 1-1.06 0l-.348-.554a1.5 1.5 0 0 0-.473-.473l-.554-.348a.626.626 0 0 1 0-1.06l.554-.348a1.5 1.5 0 0 0 .473-.473l.348-.554a.626.626 0 0 1 1.06 0");
}
</style><path class="hhg2n4bac"/>`,
		"fallback": "uix:scene-relax",
	});
}

export default Component;
