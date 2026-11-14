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

.pm9xdzbrj {
  fill: currentColor;
  d: path("M6.5 8a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0");
}

.re1axmb1a {
  d: path("M12 13.5v8m-3 0h6");
}
</style><g class="hntgybcog"><path class="pm9xdzbrj"/><path class="re1axmb1a"/></g>`,
		"fallback": "uix:piste-easy",
	});
}

export default Component;
