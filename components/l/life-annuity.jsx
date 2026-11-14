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

.oj0aovi6j {
  d: path("M8.25 9v6a3.75 1.75 0 0 0 7.5 0V9m-7.5 3a3.75 1.75 0 0 0 7.5 0");
}

.xu3nmbclo {
  d: path("M16.5 4a9.25 9.25 0 1 1-9 0");
}

.y0unc2bha {
  d: path("M5 3.25L7.5 4l-.75 2.5M8.25 9a3.75 1.75 0 1 0 7.5 0a3.75 1.75 0 1 0-7.5 0");
}
</style><g class="hntgybcog"><path class="xu3nmbclo"/><path class="y0unc2bha"/><path class="oj0aovi6j"/></g>`,
		"fallback": "uix:life-annuity",
	});
}

export default Component;
