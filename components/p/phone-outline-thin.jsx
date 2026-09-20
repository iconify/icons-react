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

.kk7jzcbcv {
  d: path("M10 19h4");
}

.sgqi5uicf {
  d: path("M10 5h4");
}

.yysxkyxdb {
  d: path("M7 4a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H9a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="yysxkyxdb"/><path class="sgqi5uicf"/><path class="kk7jzcbcv"/></g>`,
		"fallback": "iconmind:phone-outline-thin",
	});
}

export default Component;
