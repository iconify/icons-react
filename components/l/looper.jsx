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
		"content": `<style>.dnp2npbye {
  width: 14.5px;
  height: 18.5px;
  x: 4.75px;
  y: 2.75px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jkiommvhg {
  d: path("M15.5 9.5a3.5 3.5 0 1 1-1.03-2.47m0-2v2h-2");
}

.ngu0943hg {
  cx: 12px;
  cy: 17.25px;
  r: 1.75px;
}
</style><g class="hntgybcog"><rect class="dnp2npbye"/><path class="jkiommvhg"/><circle class="ngu0943hg"/></g>`,
		"fallback": "iconoven:looper",
	});
}

export default Component;
