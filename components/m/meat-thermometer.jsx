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

.ix1rbnbtt {
  cx: 12px;
  cy: 8px;
  r: 5.25px;
}

.jy2bq-bpt {
  d: path("M12 8L9.4 6.5m2.6 6.75v8");
}
</style><g class="hntgybcog"><circle class="ix1rbnbtt"/><path class="jy2bq-bpt"/></g>`,
		"fallback": "iconoven:meat-thermometer",
	});
}

export default Component;
