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

.llilh5ddm {
  d: path("M15.25 19.5a3 5.25 0 0 1 6 0M9.75 12h4.5M12 12v7.5");
}

.nbp9vlbqw {
  cx: 18.25px;
  cy: 8.5px;
  r: 2.5px;
}

.om__bzh9z {
  cx: 5.75px;
  cy: 8.5px;
  r: 2.5px;
}

.ptdmkpbch {
  d: path("M2.75 19.5a3 5.25 0 0 1 6 0");
}
</style><g class="hntgybcog"><circle class="om__bzh9z"/><path class="ptdmkpbch"/><circle class="nbp9vlbqw"/><path class="llilh5ddm"/></g>`,
		"fallback": "iconoven:mediation",
	});
}

export default Component;
