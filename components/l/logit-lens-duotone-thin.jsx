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
		"content": `<style>.gykfelgpq {
  d: path("M13 11v7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jt7d488ke {
  d: path("M13 7a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.l7q8onb4q {
  d: path("M9 9v9");
}

.ltbxi_2yl {
  d: path("M5 13v5");
}

.y2_912btp {
  fill: currentColor;
  d: path("M13 7a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zdawi4qef {
  d: path("m20 10 2 2");
}
</style><g class="hntgybcog"><path class="y2_912btp"/><path class="ltbxi_2yl"/><path class="l7q8onb4q"/><path class="gykfelgpq"/><path class="jt7d488ke"/><path class="zdawi4qef"/></g>`,
		"fallback": "iconmind:logit-lens-duotone-thin",
	});
}

export default Component;
