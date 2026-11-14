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

.jojse1b2w {
  d: path("M12 5.25V7.5h2M9.75 16h4.5");
}

.sjksiuc5y {
  d: path("M7 7.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0m5 5V21m-3.5 0h7");
}
</style><g class="hntgybcog"><path class="sjksiuc5y"/><path class="jojse1b2w"/></g>`,
		"fallback": "uix:street-clock",
	});
}

export default Component;
