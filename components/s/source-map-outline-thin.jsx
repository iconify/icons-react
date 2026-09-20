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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.b3curibjj {
  d: path("M9 9.5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ojrtcibbk {
  d: path("M12 12.5v4");
}
</style><g class="hntgybcog"><path class="abnm6smsv"/><path class="b3curibjj"/><path class="ojrtcibbk"/></g>`,
		"fallback": "iconmind:source-map-outline-thin",
	});
}

export default Component;
