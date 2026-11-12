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
		"content": `<style>.dt10bzeut {
  cx: 9px;
  cy: 17px;
  rx: 7px;
  ry: 4px;
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wbod-obam {
  stroke-linejoin: round;
  d: path("M17.0885 12.5385C16.2058 11.8648 15 11.1121 15 9.69973C15 8.28732 16.65 7.28567 18 8.64354C19.35 7.28567 21 8.28732 21 9.69973C21 11.1121 19.7942 11.8648 18.9115 12.5385C18.6 12.7762 18.3 13 18 13C17.7 13 17.4 12.7762 17.0885 12.5385Z");
}

.xkqyiwblc {
  cx: 9px;
  cy: 6px;
  r: 4px;
}
</style><g class="ipq1z-bjh"><circle class="xkqyiwblc"/><ellipse class="dt10bzeut"/><path class="wbod-obam"/></g>`,
		"fallback": "solar:user-heart-rounded-linear",
	});
}

export default Component;
