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
		"content": `<style>.a0hdtmkuu {
  d: path("M12 9.25v5.5M9.25 12h5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pfpt48slt {
  cx: 12px;
  cy: 12px;
  r: 5.5px;
}

.wjpiqs1rx {
  d: path("M17.17 19.67a9.25 9.25 0 0 1-10.34 0m-2.5-2.5a9.25 9.25 0 0 1 0-10.34m2.5-2.5a9.25 9.25 0 0 1 10.34 0m2.5 2.5a9.25 9.25 0 0 1 0 10.34");
}
</style><g class="hntgybcog"><path class="wjpiqs1rx"/><circle class="pfpt48slt"/><path class="a0hdtmkuu"/></g>`,
		"fallback": "iconoven:story-add",
	});
}

export default Component;
